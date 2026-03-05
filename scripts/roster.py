import json
import re

import pandas as pd

df = pd.read_csv("roster.csv")

df["Division"] = df["Division"].str.strip()

def clean_linkedin(url):
    if pd.isna(url) or not isinstance(url, str):
        return ""
    url = url.strip()
    url = re.sub(r"\?.*", "", url)
    url = url.rstrip("/").strip()
    match = re.search(r"linkedin\.com/(?:in/)?([^/\s]+)", url)
    if match:
        slug = match.group(1)
        return f"https://www.linkedin.com/in/{slug}"
    return ""

result = {}

df = df.drop_duplicates(subset=["Name", "Division"], keep="last")

for _, row in df.iterrows():
    name = str(row.get("Name", "")).strip() if pd.notna(row.get("Name")) else ""
    role = str(row.get("Position", "")).strip() if pd.notna(row.get("Position")) else ""

    division = str(row.get("Division", "")).strip().lower()
    if division == "investing":
        division = "investment"
    if division not in result:
        result[division] = []

    class_of = int(row["Class of"]) if pd.notna(row.get("Class of")) else None
    majors = str(row.get("Major(s)", "")).strip() if pd.notna(row.get("Major(s)")) else ""
    linkedin = clean_linkedin(row.get("LinkedIn", ""))
    subdivision = str(row.get("Sub-Division", "")).strip() if pd.notna(row.get("Sub-Division")) else ""

    result[division].append({
        "name": name,
        "role": role,
        "year": class_of,
        "majors": majors,
        "linkedin": linkedin,
        "subdivision": subdivision,
    })

print(json.dumps(result, indent=2))

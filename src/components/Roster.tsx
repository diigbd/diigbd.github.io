import { roster } from "../data";

type Division = keyof typeof roster;

interface RosterProps {
  division: Division;
}

interface Member {
  name: string;
  role: string;
  year: number;
  majors: string;
  linkedin: string;
  subdivision: string;
}

const ROLE_ORDER = [
  "DIRECTORS",
  "ADVISORS",
  "PROJECT MANAGERS",
  "OPERATIONS",
  "SENIOR ANALYSTS",
  "ANALYSTS",
  "BUSINESS DEVELOPMENT",
] as const;

function getRoleGroup(role: string): string {
  const lower = role.toLowerCase().trim();
  if (lower.includes("director")) return "DIRECTORS";
  if (lower.includes("pm") || lower.includes("project manager"))
    return "PROJECT MANAGERS";
  if (lower.includes("advisor")) return "ADVISORS";
  if (lower.includes("operations")) return "OPERATIONS";
  if (lower.includes("senior analyst")) return "SENIOR ANALYSTS";
  if (lower.includes("business development")) return "BUSINESS DEVELOPMENT";
  return "ANALYSTS";
}

export const Roster = ({ division }: RosterProps) => {
  const members = roster[division] as Member[];

  const groups = new Map<string, Member[]>();
  for (const member of members) {
    const group = getRoleGroup(member.role);
    if (!groups.has(group)) {
      groups.set(group, []);
    }
    groups.get(group)!.push(member);
  }

  const sortedGroups = ROLE_ORDER.filter((g) => groups.has(g)).map((g) => ({
    label: g,
    members: groups.get(g)!,
  }));

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-16 tracking-wide">
          MEET THE TEAM
        </h2>

        <div className="max-w-6xl mx-auto space-y-16">
          {sortedGroups.map(({ label, members }) => (
            <div
              key={label}
              className="flex flex-col md:flex-row gap-6 md:gap-16"
            >
              <div className="md:w-52 shrink-0">
                <h3 className="text-xl md:text-2xl font-display font-bold text-primary tracking-wide">
                  {label}
                </h3>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-5">
                {members.map((member, i) => (
                  <div key={`${member.name}-${i}`}>
                    {member.linkedin ? (
                      <a
                        href={
                          member.linkedin.startsWith("http")
                            ? member.linkedin
                            : `https://${member.linkedin}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium text-primary underline underline-offset-2 hover:text-primary/70 transition-colors"
                      >
                        {member.name}
                      </a>
                    ) : (
                      <span className="text-lg font-medium text-primary">
                        {member.name}
                      </span>
                    )}
                    <p className="text-sm text-primary/70 mt-0.5">
                      Class of {member.year}
                      {member.majors ? ` | ${member.majors}` : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

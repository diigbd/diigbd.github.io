import { pastClients } from "@/data";

interface Client {
  name: string;
  logo: string;
  description: string;
  deliverableLink?: string;
}

const ClientLogo = ({ client }: { client: Client }) => (
  <div className="w-36 h-36 md:w-44 md:h-44 shrink-0 rounded-md overflow-hidden flex items-center justify-center p-2">
    <img
      src={`${import.meta.env.BASE_URL}logos/${client.logo}`}
      alt={client.name}
      className="max-w-full max-h-full object-contain"
    />
  </div>
);

export const PastClients = ({ division }: { division: string }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-16">
          Past Clients
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
          {(pastClients[division] as Client[]).map((client) => (
            <div key={client.name} className="flex items-center gap-6">
              <ClientLogo client={client} />
              <div className="flex-1 pt-1">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {client.description}
                </p>
                {client.deliverableLink && (
                  <p className="mt-3 text-sm md:text-base text-gray-700">
                    Read the full analysis{" "}
                    <a
                      href={client.deliverableLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline underline-offset-2 hover:text-primary transition-colors"
                    >
                      HERE
                    </a>
                    .
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

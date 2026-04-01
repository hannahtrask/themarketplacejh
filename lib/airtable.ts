const AIRTABLE_TOKEN = process.env.AIRTABLE_API_KEY;
const BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
const TABLE_NAME = process.env.AIRTABLE_TABLE_NAME;

export interface Member {
  id: string;
  name: string;
  skills: string[];
  bio: string;
  portfolioUrl: string;
  email: string;
  photoUrl: string;
  rate: string;
  active: boolean;
}

export async function getMembers(): Promise<Member[]> {
  if (!AIRTABLE_TOKEN || !BASE_ID || !TABLE_NAME) {
    console.error("Missing Airtable environment variables");
    return [];
  }

  try {
    const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`
      },
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      throw new Error(`Airtable API error: ${response.status}`);
    }

    const data = await response.json();

    return data.records
      .filter((record: AirtableRecord) => record.fields.Active !== false)
      .map((record: AirtableRecord) => ({
        id: record.id,
        name: record.fields.Name || "Unnamed",
        skills: record.fields.Skills || [],
        bio: record.fields.Bio || "",
        portfolioUrl: record.fields["Portfolio URL"] || "",
        email: record.fields.Email || "",
        photoUrl: record.fields.Photo?.[0]?.url || "/placeholder.jpg",
        rate: record.fields.Rate || "Rate on request",
        active: record.fields.Active === true
      }));
  } catch (error) {
    console.error("Error fetching members from Airtable:", error);
    return [];
  }
}

export async function getMemberById(id: string): Promise<Member | null> {
  if (!AIRTABLE_TOKEN || !BASE_ID || !TABLE_NAME) {
    return null;
  }

  try {
    const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}/${id}`, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`
      },
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      return null;
    }

    const record: AirtableRecord = await response.json();

    return {
      id: record.id,
      name: record.fields.Name || "Unnamed",
      skills: record.fields.Skills || [],
      bio: record.fields.Bio || "",
      portfolioUrl: record.fields["Portfolio URL"] || "",
      email: record.fields.Email || "",
      photoUrl: record.fields.Photo?.[0]?.url || "/placeholder.jpg",
      rate: record.fields.Rate || "Rate on request",
      active: record.fields.Active === true
    };
  } catch (error) {
    console.error("Error fetching member:", error);
    return null;
  }
}

// Internal type for raw Airtable records
interface AirtableRecord {
  id: string;
  fields: {
    Name?: string;
    Skills?: string[];
    Bio?: string;
    "Portfolio URL"?: string;
    Email?: string;
    Photo?: { url: string }[];
    Rate?: string;
    Active?: boolean;
  };
}

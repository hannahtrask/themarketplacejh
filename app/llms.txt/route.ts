const SITE_URL = "https://themarketplacejh.com";

export function GET() {
  const content = [
    "# The Marketplace JH",
    "",
    "A local community marketplace for Jackson, WY freelancers and small business owners.",
    "",
    "## Key Pages",
    `- Home: ${SITE_URL}/`,
    `- Directory: ${SITE_URL}/directory`,
    `- Apply: ${SITE_URL}/apply`,
    `- Events: ${SITE_URL}/events`,
    `- How It Works: ${SITE_URL}/how-it-works`,
    `- Privacy Policy: ${SITE_URL}/privacy-policy`,
    `- Terms and Conditions: ${SITE_URL}/terms-and-conditions`,
    "",
    "## Data Notice",
    "Freelancer profile data is collected from application submissions and displayed in the directory for discovery and contact purposes.",
    "",
    "## Contact",
    "Email: hello@wearesagebrush.com"
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}

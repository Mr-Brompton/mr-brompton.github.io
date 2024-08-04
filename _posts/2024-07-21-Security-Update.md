---
layout: post
author: Mr-Brompton
img: /assets/img/Cyber-update.jpg
---


## Security News Update {{ page.date | date_to_string }}
My hot topics for 07 Jul 2024 include; Ransomware Attacks on CDK Global, Change Healthcare, CrowdStrike Software Update Outage, Polyfill.io supply chain Attack, Entrust responds to Google, and Snowflake - the worlds largest data breach.

### Ransomware Attacks
#Ransomware

**Users Affected:** CDK Global, Change Healthcare,

**Description:** Ransomware attacks hit car dealerships, and change healthcare.

**Preventative Action:**** 
    - Develop contingency plans.
	- Plan for incident response.
	- Prioritize data protection
	- Focus on ransomware protection.

**Remedial action** If attacked by Ransomware preventative action is key. If the right steps have been taken, recovery should be a case of following the designated plans. If those plans are not in place, the best answer is to contact a specialist. This *Will* get expensive, however if quick and decisive action is taken to recover and rebuild systems, the cost may be reduced. Never pay the attacker.

For more on protecting yourself, or your small business from ransomware [Nist Small Business Ransomware Webinar](https://www.nist.gov/news-events/events/2024/08/nist-small-business-webinar-ransomware-prevention-detection-response-and)
 

### CrowdStrike Software Update Outage

**Users Affected:** Various companies globally.

**Description:** A software update from cybersecurity firm CrowdStrike caused a global IT outage affecting banks, airlines, and other organizations.

**Preventative Action:** Preventative action will depend on the budget available. At a minimum contingency and incident response plans should be in place, for critical systems test environments (particularly for cloud resources), should be used to test updates before they are deployed.

**Remedial Action** [Follow the Crowdstrike fix guide published by Microsoft](https://support.microsoft.com/en-us/topic/kb5042421-crowdstrike-issue-impacting-windows-endpoints-causing-an-0x50-or-0x7e-error-message-on-a-blue-screen-b1c700e0-7317-4e95-aeee-5d67dd35b92f)

### Polyfill.io Attack
#SupplyChain

**Users affected:** Websites that use the Polyfill[.]io JavaScript library

**Description:** Users of many websites including WarnerBros, Hulu, Mercedes-Benz, and Pearson were redirected to adult entertainment, and gambling websites.

**Preventative action:** Users can [block pop-ups and redirects](https://www.wikihow.com/Block-Page-Redirects)

**Remedial Action:** Developers should use [Subsource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) with hashes generated by services like [srihash](https://www.srihash.org/)

### Entrust
#CA-Authority

**Users Affected:** Webpages which use Entrust as a certificate signing authority.

**Description:** Entrust's response to the recent Google Chrome announcement was to say the least... Lacking.

**Preventative action:** None

**Remedial Action:** It is advised to switch to a different CA certificate authority as certificates begin to expire.

## Snowflake
#DataBreach

**Users affected:** Users of the cloud data and AI SaaS platform Snowflake, including Ticketmaster, Advance Auto Parts, Santander Bank, LendingTree, and now AT&T, and more than 340 others.

**Description:** Info-stealers were used to gain access to Snowflake databases
using their customer’s stolen credentials. How the threat actor gained access to Snowflakes systems and what information they stole is as yet unclear and Snowflake are being less than helpful in divulging that information, however Snowflakes customers who did not enable MFA have been the subject of further attacks.

**Preventative action:** It seems Multi-Factor Authentication (MFA) on the part of both Snowflake, and their customers would have prevented this breach.

**Remedial Action:** Companies affected should be honest with users about the data that has been taken, as well as beginning legal proceedings against the threat actors. Additionally policy and procedure should be checked and enforced so that MFA is enabled as a matter of priority.
 
---
layout: post
author: Mr-Brompton
img: /assets/img/Cyber-update.jpg
---


## Security News Update {{ page.date | date_to_string }}
### North Korean insider threat, Crowdstrike URL squatting, A young UK boy arrested, Disney slack hacked, and Cisco win the CVE high score.

---
## North Korean Hacker Hired by Security Company
#insiderThreat

**Users Affected:** KnowBe4 Cybersecurity training and awareness company.

**Description:** A suspected North Korean insider threat was hired by KnowBe4. The insider threat attempted to load infostealer malware onto their work issued device. Knowbe4's security policies and procedures seem to have been effective in limiting the damage.  

**Preventative Action:**

- Complete all necessary background checks - including checking photo ID in person.
- Use a Zero Trust approach to handle permissions.
- Use 'Security in depth' techniques to minimise  blast radius.
- Use a SIEM service to monitor for suspicious activity on employee devices.

**Remedial action**
None required for users or businesses. 

Read more at [KnowBe4's Blog](https://blog.knowbe4.com/north-korean-fake-it-worker-faq)

---
## **CrowdStrike Event Used to Push Malware**
#UrlSquatting #Crowdstrike/outtage

**Users Affected:** IT teams and users affected by the Crowdstrike outtage, searching for a fix.

**Description:** Various threat actors have attempted to trick users looking for a quick fix, into installing malware by running scripts posted to IT forums and on URL squatting sites.  

**Preventative Action:** Only run scripts and software from a trusted source. Follow the [Crowdstrike fix guide published by Microsoft](https://support.microsoft.com/en-us/topic/kb5042421-crowdstrike-issue-impacting-windows-endpoints-causing-an-0x50-or-0x7e-error-message-on-a-blue-screen-b1c700e0-7317-4e95-aeee-5d67dd35b92f)

**Remedial Action** If you may have been a victim of this type of attack, remediation entirely depends on asset/value analysis, and the type of payload installed on the device. In general a good Antivirus should be able to find and quarantine most issues, however a wipe and restore may also be prudent.

---
## ScatteredSpider Arrest
#ThreatActor

**Users affected:** None

**Description:** 17-year-old boy from Walsall has been arrested as suspected member of [Scattered Spider](https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-320a) cybercrime syndicate known for the hack against MGM casinos. Scattered Spider are known for Ransomware attacks and more recently, data theft exploitation.

**Preventative action:** None

**Remedial Action:** None

**Further Reading:** For more read [The Hacker News article on Scattered Spider Arrest](https://thehackernews.com/2024/07/17-year-old-linked-to-scattered-spider.html)


---
## Disney Hacked
#DataBreach 

**Users affected:** Disney Corporation.

**Description:** Threat actor Nullbulge has released 1.1 TiB of communications data from Disney's internal slack in  a hacktivism motivated attack. The data leak appears to include unreleased projects, code, images, login credentials, and links to internal sites and APIsDetails of how the hack took place are currently unknown, however it is rumoured to have been due to infostealer malware.

**Preventative action:** 
- Always use MFA / 2FA to secure communications channels.
- Train staff on the importance of good security practice.

**Remedial Action:** General users and businesses may not be affected by this breach.

**Further Reading** Hackread has more about [The Nullbulge Disney Hack](https://hackread.com/disneys-internal-slack-breached-nullbulge-leak-data/)


---
## CISCO Hits 10.0 CVE High Score
#Vulnerability #CVE

**Users affected:** Users of Cisco Smart Software Manager On-Prem devices.

**Description:** Cisco disclosed a maximum-security vulnerability that allows remote threat
actors with no authentication to change the password of any user, including those of
administrators with accounts, on Cisco Smart Software Manager On-Prem devices. The product contains a vulnerability that allows hackers to change any account's password. The severity of the vulnerability, tracked as CVE-2024-20419, is rated 10, the maximum score.

**Preventative action:** None

**Remedial Action:** Update Affected Devices.

**Further Reading** [Cisco's advisory](https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-cssm-auth-sLw3uhUy) is a must read.

---

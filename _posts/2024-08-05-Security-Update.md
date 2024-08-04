---
layout: post
author: Mr-Brompton
img: /assets/img/Cyber-update.jpg
---


## Security News Update {{ page.date | date_to_string }}
### OEMs total failure, Tracking trump's assasin, Russian's love farming, and advice for users of Firefox, ESXi, UEFI, and protonmail

---

## Many systems vulnerable to embarrasing secure boot failure.
#SupplyChain #secureboot

**Users affected:** among others, users of **HP, Lenovo, Dell, Intel, Acer and Gigabyte** devices who rely on secure boot.

**Description:** An embarrasing error where many OEMs shipped devices where the default private key was not changed from one named **DO NOT SHIP** and **DO NOT TRUST** which allows threat actors with access to vulnerable devices to deploy UEFI malware like [CosmicStrand](https://securityboulevard.com/2022/08/cosmicstrand-highlights-ongoing-firmware-risks/ "‘CosmicStrand’ Highlights Ongoing Firmware Risks") and [BlackLotus](https://securityboulevard.com/2023/03/blacklotus-secure-boot-richixbw/ "Microsoft FAIL: ‘BlackLotus’ Bootkit Breaks Secure Boot").

**Preventative action:** 

- Find and replace any private keys stored in the trusted platform module, which may have the offending name.
- Use https://pk.fail/ detector published by Binarly

**Remedial Action:** If devices have been compromised due to this flaw, new trusted firmware will need to be flashed to the hardware, before re-installing any higher level software (such as operating systems).

Firmware breaches are however notoriously difficult to find.

**Further Reading**
[Original PKFAIL write up](https://www.binarly.io/blog/pkfail-untrusted-platform-keys-undermine-secure-boot-on-uefi-ecosystem) 

---

### Trump Attacker Tracked Using Mobile Ad Data
#Privacy

**Users affected:** The target in this case was a particular person. However this technique could be used against others.

**Description:** Researchers from the Oversight Project used the frequency of visits to Thomas' home and work addresses to deanonamise his mobile ad data, identifying his ad ID, before checking where else those ad ID's came from. This technoqu did have some inaccuracies, as the data only narrowed devices down to 9 possible devices, however with more confirmed locations this could be a more accurate approach in the future.

**Preventative action:** Choose Privacy-Focused Browsers, Limit apps location data permissions, Use a VPN, Check your Android and iOS privaby settings.

**Remedial Action:** Use a service like https://www.deleteme.com/ to request identifying information be removed. You will need to find you **IDFA** (for iOS) or **AAID** (Android) to remove modile ad location data stored by data brokers.

**Further Reading**
[Deanonamizing mobile ad data]](https://security.stackexchange.com/questions/252566/feasability-of-deanonymizing-commercially-available-advertiser-data)

---

## ESXi escalation of Privilege
#esxi #Privilege-Escalation

**Users affected:** Administrators of domain-joined VMware ESXi hypervisors

**Description:** If a threat actor gains access to a Domain-joined ESXi hypervisor with a low privilege account, they can gain administration access by creating a new group, and adding themselves to it. This vulnerability has been exploited in the wild, and a patch has been released.

**Preventative action:** 

- **Install software updates** – Make sure to install the latest [security updates released by VMware](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/24505) on all domain-joined ESXi hypervisors. If installing software updates is not possible, you can use the following recommendations to reduce the risk:

**Remedial Action:** 

- Validate the group “ESX Admins” exists in the domain and is hardened. Ensure there are no superfluous users.
-  [Manually deny access by this group by changing settings in the ESXi hypervisor itself](https://www.tenable.com/audits/items/CIS_VMware_ESXi_6.7_v1.2.0_L1.audit:f566c47e5630aa06e5a8a521877b55b6). If full admin access for the Active Directory ESX admins group is not desired, you can disable this behavior using the advanced host setting: ‘Config.HostAgent.plugins.hostsvc.esxAdminsGroupAutoAdd’.
- Change the admin group to a different group in the ESXi hypervisor.
-  Add custom detections in XDR/SIEM for the new group name.  
- Configure sending ESXi logs to a SIEM system and monitor suspicious full administrative access.

**Further Reading**

The [CVE](https://nvd.nist.gov/vuln/detail/CVE-2024-37085)
A [pretty darn good write up](https://bob.plankers.com/vmware-cve-2024-37085/)
[Microsoft's write up](https://www.microsoft.com/en-us/security/blog/2024/07/29/ransomware-operators-exploit-esxi-hypervisor-vulnerability-for-mass-encryption/)

---
## APT45 threat actor identified through Protonmail
#APT45 #Opsec

**Users affected:** Users of Proton Mail for encrypted communications.

**Description:** Law enforcement made a request to Proton Mail for the data they hold on a North Korean hacker's email address. Proton was unable to give email account contents, bout did hand over a recovery email address. This lead to the identification and charging of Rim Jong Hyok.

**Preventative action:** For absolute confidentiality when using Proton Mail Ensure any recovery email used for privacy related accounts does not hold identifiable information.

**Remedial Action:** If you require absolute privacy in your Proton Mail account, and have an identifiable email address linked for recovery, it may be wise to change it, or to set up a new account with a completely clean recovery address.

**Further Reading**
[US Department of Justice press release](https://www.justice.gov/opa/pr/north-korean-government-hacker-charged-involvement-ransomware-attacks-targeting-us-hospitals)

---
## Python Package Targets 64 Specific Users.
#SocialEngineering #SupplyChain 

**Users affected:** Users with one of 64 MAC UUID undisclosed hashes, and python developers more broadly.

**Description:** a Python package named "lr-utils-lib" was uploaded to PyPi in early June 2024. This package contained hidden malicious code that automatically executes upon installation. Specifically targeting macOS systems, the malware attempts to steal Google Cloud Platform credentials by sending them to a remote server. The attackers use a list of predefined hashes to focus on specific macOS machines, and if successful, they gain unauthorized access to victims' Google Cloud resources. Additionally, a fake LinkedIn profile for "Lucid Zenith," who falsely claims to be the CEO of Apex Companies, LLC, was discovered, suggesting possible social engineering tactics alongside the malware.

**Preventative action:** 

- Educate employees about social engineering, and supply chain attacks.
- Use 'multiple authentication' techniques in cloud accounts.
- Ensure the integrity of any third party packages used in projects.

**Remedial Action:** 
 - none required for most users in this instance.

**Further Reading**
[Malicious Python Package targets specific MacOS users](https://checkmarx.com/blog/malicious-python-package-targets-macos-developers-to-access-their-gcp-accounts/)

---
## Firefox not blocking 3rd Party Cookies
#Firefox #privacy #cookies

**Users affected:** Users of Firefox

**Description:** Firefox seems not to be honoring the 'strict-mode' third party cookie option. The origins of this error seem to be more oversight based than malicious, however privacy conscious users should be aware.

**Preventative action:** 

none

**Remedial Action:** 

switch to custom mode, and the cookie blocking selection: “All cross-site cookies (may cause websites to break)”.

**Further Reading**
None available.

---

## Automated malicious code distribution network discovered on Github
#github

**Users affected:** Hard to say, as code could be downloaded from GitHub but this is unlikely in this case. 

**Description:** Stargazers Ghost Network, an automated malicious code distribution network with a possible 1, 100 accounts has been found on Github, known to be distributing various forms of malware. This is a very in depth story, and my short description cannot do it justice. It's certainly worth a read.

**Preventative action:** 

- General Hygeine when running code from the internet and clicking download links.
- Keep OS's and browsers fully patched
- Use a SEIM to identify and hardened machines that have visited known malicious code distributors.
- Use a layered / security in depth approach to keep valuable assets in protected environemnts

**Remedial Action:** 
Depends on Threat and Asset Value analysis. Where compromise is known;
- Endpoints should be protected and scanned with robust endpoint security software (Antivirus).
- Wipe and restore may be required for known compromise of high value assets.


**Further Reading**
Original (Fascinating) write up [Stargazers Ghost Network](https://research.checkpoint.com/2024/stargazers-ghost-network/)

---
## Russians Love Farming
#misinformation #Bots

**Users affected:** Citizens of nations Russia would wish to target.

**Description:** A Russian bot farm has been dismantled by the FBI, thought to be the product of Russian news agency Russia Today (RT) which used AI generated profiles and content. When asked for comment RT suggested 'Farming is a beloved pass time for millions of Russians'.

**Preventative action:** Find your information from trusted sources, fact check anything that makes you angry, or seeks to provoke strong emotions.

**Remedial Action:** none.

**Further Reading**
Cyberscoop reports on [Russian Bot Farm](https://cyberscoop.com/us-international-authorities-seize-russian-ai-bot-farm/)
How to [identify misinformation](https://www.mindtools.com/a0g6bjj/how-to-spot-real-and-fake-news) from Mindtools.

---
Contact: mr.brompton@mail.com
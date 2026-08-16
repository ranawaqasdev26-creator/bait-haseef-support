export type Priority = "High" | "Medium";

export type Ticket = {
  id: string;
  subject: string;
  priority: Priority;
  threads: number;
  created: string;
  overdueSince: string;
  lastReply: string;
  officialTime: string;
  correctionTime: string;
  status: string;
  contact: string;
  verified: string[];
  pending: string[];
  blocker?: string;
  whatTheySaid: string;
  officialEnglish: string;
  whatTheyWant: string[];
  deliverable: string;
};

export const CORRECTION_ENGLISH =
  "Official correction: Please disregard the earlier Arabic reply sent today and do not rely on it. The concise bilingual message sent after it is the only official and approved response for this ticket. Please remove the earlier reply from the thread if possible.";

export const tickets: Ticket[] = [
  {
    id: "203",
    subject: "Admin Accounts Issue & Follow-up on Previous Tickets",
    priority: "Medium",
    threads: 7,
    created: "23 Jul 2026, 10:48 AM",
    overdueSince: "23 Jul 2026, 10:48 AM",
    lastReply: "11 Aug 2026, 3:16 PM",
    officialTime: "3:12 PM",
    correctionTime: "3:17 PM",
    status: "Waiting for Customer",
    contact: "aia",
    verified: ["mek account login works"],
    pending: [
      "aia full login and access check",
      "bms full login and access check",
      "Per-account report for mek, aia, bms",
    ],
    whatTheySaid:
      "The three admin accounts are independent. They are not asking for a shared password. They already know mek works. Full login and permission checks for aia and bms are still pending. Assign Members List.xlsx was already attached and shows the required access level.",
    officialEnglish:
      "The accounts are independent; we are not requesting a shared password. We know mek works, while full login/access verification for aia and bms is still pending. Assign Members List.xlsx was previously attached and shows the required access. Please provide a separate report per account covering activation, organization, Profile, admin role, licenses, applications, SSO/MFA, and remaining action. Keep the ticket open until all three accounts pass login testing.",
    whatTheyWant: [
      "A separate report for each account covering: activation, organization, Profile, admin role, licenses, applications, SSO/MFA, and remaining action.",
      "Keep the ticket open until all three accounts pass login testing.",
    ],
    deliverable:
      "Per-account report for mek / aia / bms: activation, org, Profile, role, licenses, apps, SSO/MFA, leftover work. Login test all three.",
  },
  {
    id: "202",
    subject: "Users Cannot See Colleagues in Zoho",
    priority: "Medium",
    threads: 5,
    created: "23 Jul 2026, 10:36 AM",
    overdueSince: "23 Jul 2026, 10:36 AM",
    lastReply: "11 Aug 2026, 3:16 PM",
    officialTime: "3:12 PM",
    correctionTime: "3:16 PM",
    status: "Waiting for Customer",
    contact: "aia",
    verified: [
      "Hallek confirmed Cliq departments and designations are not configured",
    ],
    pending: [
      "Proposed department/designation mapping",
      "Within Department test",
      "Search and chat test after lead approval",
    ],
    whatTheySaid:
      "Hallek already confirmed that Cliq departments and designations are not configured, so users still cannot see colleagues. The issue is not resolved. Assign Members List.xlsx was already attached with all employees, departments, job titles, and emails.",
    officialEnglish:
      "You confirmed that Cliq departments/designations are not configured, so the issue is not resolved yet. Assign Members List.xlsx was previously attached with all employees, departments, titles, and emails. Please use it as the baseline and send us the proposed mapping for review instead of requesting the same data again. After department-lead approval, we will test Within Department, search, and chat. Keep the ticket open.",
    whatTheyWant: [
      "Use the attached Excel as the baseline. Do not ask for the same employee data again.",
      "Send a proposed department/designation mapping for client review.",
      "After department-lead approval, they will test Within Department, search, and chat.",
      "Keep the ticket open.",
    ],
    deliverable:
      "Proposed Cliq department/designation mapping from Assign Members List.xlsx. Do not re-request the list.",
  },
  {
    id: "201",
    subject: "Workflow & Notifications",
    priority: "High",
    threads: 7,
    created: "21 Jul 2026, 10:20 AM",
    overdueSince: "21 Jul 2026, 10:20 AM",
    lastReply: "11 Aug 2026, 3:16 PM",
    officialTime: "3:12 PM",
    correctionTime: "3:16 PM",
    status: "Waiting for Customer",
    contact: "aia",
    verified: [],
    pending: [
      "End-to-end notification delivery proof",
      "Workflow list with criteria and recipients",
      "Tests for Lead, Task, BD, PMO, rejection, reassignment, completion, overdue",
    ],
    whatTheySaid:
      "No end-to-end test has confirmed that the requested CRM and Projects notifications are active and actually arriving. Assign Members List.xlsx already has departments, titles, and emails. Their remaining internal step is to approve the final recipient for each trigger.",
    officialEnglish:
      "No end-to-end test has yet confirmed activation and delivery of the requested CRM/Projects notifications. Assign Members List.xlsx was previously attached with the departments, titles, and emails required; our remaining internal action is final recipient approval per trigger. Please provide the active workflow list, criteria, recipients, and test evidence for Lead, Task, BD, PMO, rejection, reassignment, completion, and overdue events. Keep the ticket open.",
    whatTheyWant: [
      "Active workflow list with criteria and recipients.",
      "Test evidence for: Lead, Task, BD, PMO, rejection, reassignment, completion, and overdue events.",
      "Keep the ticket open.",
    ],
    deliverable:
      "Active workflow list + criteria + recipients + test proof for Lead, Task, BD, PMO, rejection, reassignment, completion, overdue.",
  },
  {
    id: "200",
    subject: "Roles, Permissions & Teamspace",
    priority: "High",
    threads: 5,
    created: "21 Jul 2026, 10:17 AM",
    overdueSince: "21 Jul 2026, 10:17 AM",
    lastReply: "11 Aug 2026, 3:16 PM",
    officialTime: "3:12 PM",
    correctionTime: "3:16 PM",
    status: "Waiting for Customer",
    contact: "aia",
    verified: [
      "Mohannad can access several modules",
      "Mohannad can access Cost Sheet",
    ],
    pending: [
      "Zoho Desk inside CRM — Permission denied for Mohannad",
      "User-by-user permission testing",
      "Active-user matrix (Profile, Role, Teamspace, modules, licenses)",
    ],
    whatTheySaid:
      "Mohannad's account can open several modules and Cost Sheet, but Zoho Desk inside CRM showed Permission denied. User-by-user permission testing is not finished. Assign Members List.xlsx already has name, department, title, access, and email.",
    officialEnglish:
      "Mohannad's account can access multiple modules and Cost Sheet, but Zoho Desk inside CRM showed Permission denied. User-by-user permission testing is not complete. Assign Members List.xlsx was previously attached with name, department, title, access, and email. Please provide the active-user matrix including Profile, Role, Teamspace, modules, and licenses, and resolve/explain Desk access. Do not close the ticket before role-based Pass/Fail testing.",
    whatTheyWant: [
      "Active-user matrix: Profile, Role, Teamspace, modules, and licenses.",
      "Resolve or explain the Desk permission error.",
      "Do not close until each role has a Pass/Fail test.",
    ],
    deliverable:
      "User matrix (Profile, Role, Teamspace, modules, licenses) and fix/explain Desk Permission denied for Mohannad.",
  },
  {
    id: "199",
    subject: "CRM Configuration Updates",
    priority: "High",
    threads: 5,
    created: "21 Jul 2026, 10:14 AM",
    overdueSince: "21 Jul 2026, 10:14 AM",
    lastReply: "11 Aug 2026, 3:16 PM",
    officialTime: "3:12 PM",
    correctionTime: "3:16 PM",
    status: "Waiting for Customer",
    contact: "aia",
    verified: ["15% VAT during PO test"],
    pending: [
      "Quotation template",
      "Kick-off DateTime",
      "Project Responsible",
      "BD/PMO notifications",
      "Lead-update notification",
    ],
    whatTheySaid:
      "They only verified 15% VAT during the PO test. Acceptance testing is still pending for the quotation template, Kick-off DateTime, Project Responsible, and BD/PMO notifications. The requested Lead-update notification has not been proven active or delivered. BD/PMO details are already in Assign Members List.xlsx.",
    officialEnglish:
      "We verified only the 15% VAT during the PO test. Acceptance testing is still pending for the quotation template, Kick-off DateTime, Project Responsible, and BD/PMO notifications. The requested Lead-update notification has not yet been verified as active or delivered. Assign Members List.xlsx was previously attached with BD/PMO details. Please provide the Lead workflow name/criteria, quotation-template name, modified-field locations, and notification test evidence. Keep the ticket open.",
    whatTheyWant: [
      "Lead workflow name and criteria.",
      "Quotation template name.",
      "Where the modified fields live.",
      "Notification test evidence.",
      "Keep the ticket open.",
    ],
    deliverable:
      "Lead workflow name/criteria, quotation template name, modified field locations, notification test proof. VAT 15% already accepted.",
  },
  {
    id: "198",
    subject: "Issues with Cost Sheet, Time Tracker, and PO Integration",
    priority: "High",
    threads: 5,
    created: "21 Jul 2026, 10:12 AM",
    overdueSince: "21 Jul 2026, 10:12 AM",
    lastReply: "11 Aug 2026, 3:16 PM",
    officialTime: "3:12 PM",
    correctionTime: "3:16 PM",
    status: "Waiting for Customer",
    contact: "aia",
    verified: [
      "PO-00004 exists as a draft",
      "15-minute Time Log",
      "Historical Cost Sheet records with completed approvals",
    ],
    pending: [
      "Approval-path notifications not proven",
      "PO integration location confirmation",
      "Notification setup details",
    ],
    whatTheySaid:
      "They verified PO-00004 as a draft and a 15-minute Time Log. Older Cost Sheet records already show completed approvals. The requested approval-path notifications have not been verified as active or delivered. Their remaining internal step is to approve the owner of each approval stage.",
    officialEnglish:
      "We verified PO-00004 as a draft and a 15-minute Time Log; historical Cost Sheet records also show completed approvals. The requested approval notifications have not yet been verified as active or delivered. Assign Members List.xlsx was previously attached with departments, titles, and emails; our remaining internal action is approving the owner of each stage. Please confirm the PO integration configuration/location and provide the notification setup details. Keep the ticket open until the full flow is tested.",
    whatTheyWant: [
      "Confirm the PO integration setup and where the PO appears.",
      "Provide the notification configuration details.",
      "Keep the ticket open until the full approval flow is tested.",
    ],
    deliverable:
      "Confirm PO integration location/setup and approval-notification config. PO-00004 draft and 15-min Time Log already verified.",
  },
  {
    id: "197",
    subject: "Multiple Issues with Task Creation and Assignment",
    priority: "Medium",
    threads: 5,
    created: "23 Jul 2026, 10:09 AM",
    overdueSince: "23 Jul 2026, 10:09 AM",
    lastReply: "11 Aug 2026, 3:16 PM",
    officialTime: "3:11 PM",
    correctionTime: "3:16 PM",
    status: "Waiting for Customer",
    contact: "aia",
    verified: [
      "Time Log on Test 14-May / Test Task 02 — 15 min Non-Billable, Pending",
    ],
    pending: [
      "Task Owner",
      "Associated Team",
      "Completed status",
      "Assignment email delivery",
    ],
    blocker: "PMO owner Faisal cannot log in to the faa account.",
    whatTheySaid:
      "They only verified Time Log on Test 14-May / Test Task 02: a 15-minute Non-Billable log saved successfully with Pending status. Final acceptance testing is still incomplete for Task Owner, Associated Team, Completed status, and assignment-email delivery. They cannot confirm assignment notifications are active. Blocker: PMO owner Faisal cannot log in to the faa account.",
    officialEnglish:
      "We verified only the Time Log function on Test 14-May / Test Task 02: a 15-minute Non-Billable log was saved successfully with Pending status. Final task acceptance testing is still incomplete for Task Owner, Associated Team, Completed status, and assignment-email delivery. We cannot yet confirm that assignment notifications are active or received. PMO owner Faisal cannot access his faa account, which blocks the final test. Assign Members List.xlsx was previously attached with employee details. Please assist with faa access and provide screenshots/configuration details for the four items. Keep the ticket open.",
    whatTheyWant: [
      "Fix faa account access for Faisal so testing can finish.",
      "Screenshots / configuration details for Task Owner, Associated Team, Completed, and assignment email.",
      "Keep the ticket open.",
    ],
    deliverable:
      "Unlock faa for Faisal (PMO). Screenshots for Task Owner, Associated Team, Completed, assignment email. Time Log already verified.",
  },
];

export type TimelineEvent = {
  time: string;
  ticketId: string;
  kind: "official" | "correction";
  title: string;
};

export const timeline: TimelineEvent[] = [
  { time: "3:17 PM", ticketId: "203", kind: "correction", title: "aia has replied" },
  { time: "3:16 PM", ticketId: "202", kind: "correction", title: "aia has replied" },
  { time: "3:16 PM", ticketId: "200", kind: "correction", title: "aia has replied" },
  { time: "3:16 PM", ticketId: "201", kind: "correction", title: "aia has replied" },
  { time: "3:16 PM", ticketId: "199", kind: "correction", title: "aia has replied" },
  { time: "3:16 PM", ticketId: "198", kind: "correction", title: "aia has replied" },
  { time: "3:16 PM", ticketId: "197", kind: "correction", title: "aia has replied" },
  { time: "3:12 PM", ticketId: "203", kind: "official", title: "aia has replied" },
  { time: "3:12 PM", ticketId: "202", kind: "official", title: "aia has replied" },
  { time: "3:12 PM", ticketId: "201", kind: "official", title: "aia has replied" },
  { time: "3:12 PM", ticketId: "200", kind: "official", title: "aia has replied" },
  { time: "3:12 PM", ticketId: "199", kind: "official", title: "aia has replied" },
  { time: "3:12 PM", ticketId: "198", kind: "official", title: "aia has replied" },
  { time: "3:11 PM", ticketId: "197", kind: "official", title: "aia has replied" },
];

export function getTicket(id: string) {
  return tickets.find((t) => t.id === id);
}

export type Solution = {
  rootCause: string;
  doThis: string[];
  sendToClient: string[];
  passFail: string[];
};

export const solutions: Record<string, Solution> = {
  "203": {
    rootCause:
      "aia and bms were never fully activated as independent Zoho One admins. mek already works. The client does not want a shared password — they want a written report per account, then a live login test.",
    doThis: [
      "Open Zoho One Admin Panel → Directory → Users. Search mek, aia, and bms as three separate users. Do not merge or share credentials.",
      "For each user confirm: status is Confirmed/Active, they belong to the Bait Haseef organization, and a unique work email is mapped.",
      "If aia or bms is Unconfirmed, Invited, or Locked: resend the confirmation email and send a password-reset link to that user's own mailbox only.",
      "Assign the admin role from Assign Members List.xlsx (Super Admin vs Admin vs Custom). Enable the apps listed for that person: CRM, Projects, Cliq, Desk, Books/Inventory as required.",
      "Turn on MFA (TOTP) per user. If the org uses Google/Microsoft SSO, map each account to SSO; otherwise leave native Zoho login + MFA.",
      "Fill a 3-row report: Account | Activation | Organization | Profile | Admin role | Licenses | Apps | SSO/MFA | Remaining action.",
      "Book a short login test with aia and bms. mek is already Pass. Keep the ticket open until all three Pass.",
    ],
    sendToClient: [
      "Per-account report table for mek, aia, and bms.",
      "Confirmation that no shared password is used.",
      "Login-test invite for aia and bms.",
    ],
    passFail: [
      "Pass: each of mek, aia, bms logs in with their own password, lands in the Bait Haseef org, and sees the apps in the report.",
      "Fail: any account still Unconfirmed, wrong org, missing app, or MFA blocked.",
    ],
  },
  "202": {
    rootCause:
      "Zoho Cliq departments and designations were never created, so the directory cannot group colleagues. Users will not see each other under Within Department until that mapping exists. The employee list is already in Assign Members List.xlsx.",
    doThis: [
      "Build a mapping sheet from Assign Members List.xlsx only. Columns: Email | Full name | Department | Designation. Do not ask the client for this data again.",
      "Send that mapping to department leads for approval before you apply it in production.",
      "After approval: Cliq Admin Panel → Organization → Departments. Create one department per unique Department value in the Excel.",
      "Cliq Admin Panel → Designations. Create one designation per unique job title.",
      "Cliq Admin Panel → Users. Set Department and Designation on every user from the mapping.",
      "Cliq Admin → Settings → User availability / Directory: allow organization directory search and 1:1 chat. Enable department-based visibility (Within Department).",
      "Optional: create one Cliq channel per department and add the mapped members.",
    ],
    sendToClient: [
      "Proposed Department × Designation mapping (from their Excel) for lead approval.",
      "After they approve: confirmation that departments, designations, and user mapping are live.",
    ],
    passFail: [
      "Pass: a user can search a colleague in the same department, open 1:1 chat, and Within Department shows the team.",
      "Fail: empty directory, users only see themselves, or department filter returns nobody.",
    ],
  },
  "201": {
    rootCause:
      "CRM and Projects notifications were requested but never proven with an end-to-end test. Workflows may exist, but the client has no list of names, criteria, or recipients, and no screenshot of a real email arriving.",
    doThis: [
      "CRM Setup → Automation → Workflow Rules. Export every Active rule on Leads, Deals, and Tasks.",
      "Projects Setup → Email Notifications. Confirm Task assigned, Task completed, Task overdue are ON.",
      "Build one table: Workflow name | App | Trigger | Criteria | Recipients | Channel (email / Cliq). Recipients stay as proposed names from Assign Members List.xlsx until the client signs off the final person per trigger.",
      "Create the missing rules if they are not already Active: Lead created/updated → BD; Lead converted → BD + PMO; Task assigned → owner; Task rejected → previous owner + BD; Task reassigned → new owner; Task completed → PMO; Task overdue (time-based) → owner + PMO.",
      "Run test records named BH-TEST-Lead and BH-TEST-Task. Capture inbox screenshots for each trigger. Attach those screenshots to the ticket.",
    ],
    sendToClient: [
      "Active workflow list with criteria and proposed recipients.",
      "Test screenshots proving each notification actually arrived.",
      "Ask them to confirm the final recipient per trigger (their leftover internal step).",
    ],
    passFail: [
      "Pass: one test Lead and one test Task produce the expected emails for Lead, Task, BD, PMO, rejection, reassignment, completion, and overdue.",
      "Fail: rule exists but no email arrives, or recipient is still a Hallek mailbox.",
    ],
  },
  "200": {
    rootCause:
      "Mohannad has CRM module access and Cost Sheet, but he is not a licensed/active Zoho Desk agent, so the Desk widget inside CRM returns Permission denied. The rest of the org still has no published Profile / Role / Teamspace matrix.",
    doThis: [
      "Zoho One → Directory → Users → Mohannad. Check whether a Zoho Desk license is assigned.",
      "If he SHOULD have Desk (per Assign Members List.xlsx): Desk Setup → Agents → add him, pick a department and role, then CRM Setup → Integrations → Zoho Desk → map the CRM user to the Desk agent. Re-test the Desk related list.",
      "If he should NOT have Desk: remove the Desk related list / web tab from his CRM Profile so Permission denied disappears. Reply on the ticket that Desk access is intentionally not granted for that role.",
      "CRM Setup → Security Control → Profiles and Roles. CRM Setup → Teamspaces. Export every active user with Profile, Role, Teamspace, modules, and licenses into one matrix.",
      "Walk the matrix against Assign Members List.xlsx. Fix mismatches (wrong profile, missing Teamspace, extra modules).",
    ],
    sendToClient: [
      "Explanation of Mohannad's Desk Permission denied (license missing vs intentionally hidden).",
      "Active-user matrix: Name | Email | Profile | Role | Teamspace | Modules | Licenses.",
      "Ask them to Pass/Fail each role — do not close before that.",
    ],
    passFail: [
      "Pass: Mohannad either opens Desk without error, or the Desk tab is gone and the role matrix matches the Excel.",
      "Fail: Permission denied still appears, or a user has modules/licenses that are not in the Excel.",
    ],
  },
  "199": {
    rootCause:
      "Only the 15% VAT tax on PO was tested. The quotation template, Kick-off DateTime, Project Responsible field, BD/PMO alerts, and Lead-update workflow were never shown or proven.",
    doThis: [
      "CRM Setup → Customization → Templates (Inventory / Quote). Confirm the live quotation template name (use the production template, e.g. Bait Haseef Quotation). VAT 15% is already accepted — do not reopen tax setup.",
      "CRM Setup → Modules → Deals (or Projects, whichever holds the job). Confirm custom fields: Kick-off DateTime (DateTime) and Project Responsible (User lookup). Note the exact layout tab where they sit.",
      "CRM Setup → Automation → Workflow Rules. Find or create Notify BD/PMO on Lead update: module Leads, trigger Edit, criteria Status or Owner changes, email alert to BD and PMO from the Excel.",
      "If no Lead-update rule exists, create BH – Lead Update Notification and turn it Active.",
      "Generate one test Quote, one test Deal with Kick-off DateTime + Project Responsible filled, and one Lead edit. Screenshot the email to BD/PMO.",
    ],
    sendToClient: [
      "Quotation template name.",
      "Field locations: Kick-off DateTime and Project Responsible (module + layout section).",
      "Lead workflow name, trigger, criteria, and recipients.",
      "Notification test screenshot.",
    ],
    passFail: [
      "Pass: test quote uses the named template with 15% VAT; both fields are visible; Lead edit sends BD/PMO email.",
      "Fail: fields missing from the layout, template unnamed, or no Lead-update email arrives.",
    ],
  },
  "198": {
    rootCause:
      "PO create and Time Log already work. The Books/Projects purchase-order link and the approval-path emails were never documented or tested beyond Draft. Historical Cost Sheets already have completed approvals.",
    doThis: [
      "Confirm Zoho Projects ↔ Zoho Books (or Inventory) integration is ON: Projects Setup → Finance / Integrations → Zoho Books.",
      "Document the PO location in writing: Project → Finance → Purchase Orders, and Books → Purchases → Purchase Orders. PO-00004 is the test record (currently Draft).",
      "Books Settings → Approvals → Purchase Orders. List each stage and the proposed approver from Assign Members List.xlsx. The client still must name the final owner of each stage.",
      "For every approval stage, enable Email notification to that approver. Also enable notify-submitter when approved or rejected.",
      "Do not close on historical Cost Sheets. Run PO-00004 (or a copy) from Draft → Submitted → Approved. Log 15 minutes again if needed. Screenshot each notification.",
    ],
    sendToClient: [
      "Where the PO appears (Projects path and Books path).",
      "Approval stages and proposed owners (pending their sign-off).",
      "Notification setup: who gets mail at submit / approve / reject.",
    ],
    passFail: [
      "Pass: PO-00004 (or copy) completes the full approval path and each stage owner receives an email. Time Log still saves.",
      "Fail: PO stays Draft, integration menu is missing, or no approval email arrives.",
    ],
  },
  "197": {
    rootCause:
      "Time Log already works. Final task tests are blocked because PMO Faisal cannot sign in to faa. Assignment emails and the four task fields cannot be accepted until that account is usable.",
    doThis: [
      "Fix faa first. Zoho One → Users → search Faisal / faa. If Unconfirmed: resend invite to his work email. If Locked: unlock. If never invited: invite into the Bait Haseef org and assign a Projects license. Send a password reset to Faisal only — do not share mek/aia passwords.",
      "Add faa as a confirmed user on the test project (Test 14-May). Make him a Project User, not a portal-only client if he must own tasks.",
      "Projects → Setup → Email Notifications: turn ON Task assigned to user, Task completed, Task overdue. Confirm CRM task emails if they also use CRM Tasks.",
      "On Test Task 02 (or a new BH-TEST task): set Task Owner = Faisal (faa), Associated Team = PMO team/user group, then move status to Completed. Confirm the assignment email landed in Faisal's inbox.",
      "Screenshot the four items the client asked for: Task Owner field, Associated Team, Completed status, assignment email. Attach them to the ticket.",
    ],
    sendToClient: [
      "Confirmation that faa is unlocked and Faisal can log in.",
      "Screenshots of Task Owner, Associated Team, Completed, and the assignment email.",
      "Ask Faisal to Pass/Fail those four items on Test 14-May / Test Task 02.",
    ],
    passFail: [
      "Pass: Faisal logs into faa, is set as Task Owner, team is associated, status can go Completed, and he receives the assignment email.",
      "Fail: faa still cannot log in, Owner field is empty, or no assignment email arrives.",
    ],
  },
};

export function getSolution(id: string) {
  return solutions[id];
}

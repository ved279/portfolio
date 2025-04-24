"use client";

import React from "react";
import { Timeline } from "@/app/components/ui/timeline";

export function TimelineDemo(): JSX.Element {
  const data = [
    {
      title: "March 2024",
      content: (
        <div>
          <h3 className="text-lg font-bold text-black dark:text-white mb-2">
            SS-Truence Innovations Pvt. Ltd.
          </h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
            <strong>Role:</strong> CSA Intern
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
            Contributed to threat detection, incident response, and vulnerability assessments. Applied knowledge of network security protocols and analytical skills to strengthen systems and ensure data integrity. This internship offered hands-on experience and deepened my cybersecurity expertise.
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            <strong>Tech Stack:</strong> Nmap, Nikto, Wireshark, John2R, SQLMap, Msfconsole
          </p>
        </div>
      ),
    },
    {
      title: "November 2024",
      content: (
        <div>
          <h3 className="text-lg font-bold text-black dark:text-white mb-2">
            SHADOW FOX
          </h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
            <strong>Role:</strong> Cybersecurity Intern
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
            Worked closely with the security team to analyze threats, monitor systems, and improve incident response protocols. Contributed to security documentation and researched emerging trends to support proactive defense strategies.
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            <strong>Tech Stack:</strong> Nmap, Nikto, Wireshark, John2R, SQLMap, Msfconsole
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

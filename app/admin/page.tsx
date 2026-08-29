"use client";

import { useState } from "react";

type Agent = {
  id: number;
  agencyName: string;
  applicantName: string;
  email: string;
  mobile: string;
  status: "Pending" | "Approved" | "Rejected";
  date: string;
};

const demoAgents: Agent[] = [
  {
    id: 1,
    agencyName: "Sample Travel & Tours",
    applicantName: "Juan Dela Cruz",
    email: "juan@example.com",
    mobile: "09123456789",
    status: "Pending",
    date: "August 29, 2026",
  },
];

export default function AdminAgentPage() {
  const [agents, setAgents] = useState(demoAgents);

  const approveAgent = (id: number) => {
    setAgents((current) =>
      current.map((agent) =>
        agent.id === id
          ? { ...agent, status: "Approved" }
          : agent
      )
    );
  };

  const rejectAgent = (id: number) => {
    setAgents((current) =>
      current.map((agent) =>
        agent.id === id
          ? { ...agent, status: "Rejected" }
          : agent
      )
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-wider">
            Chingu Travel and Tours
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            B2B Agent Approval Panel
          </h1>

          <p className="mt-2 text-gray-500">
            Review and manage travel agency partner registrations.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          <div className="bg-white rounded-2xl border p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Pending Applications
            </p>

            <p className="mt-2 text-3xl font-bold text-yellow-600">
              {
                agents.filter(
                  (agent) => agent.status === "Pending"
                ).length
              }
            </p>
          </div>

          <div className="bg-white rounded-2xl border p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Approved Agents
            </p>

            <p className="mt-2 text-3xl font-bold text-green-600">
              {
                agents.filter(
                  (agent) => agent.status === "Approved"
                ).length
              }
            </p>
          </div>

          <div className="bg-white rounded-2xl border p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Rejected Applications
            </p>

            <p className="mt-2 text-3xl font-bold text-red-600">
              {
                agents.filter(
                  (agent) => agent.status === "Rejected"
                ).length
              }
            </p>
          </div>

        </div>

        {/* APPLICATIONS */}
        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-gray-900">
              Agent Applications
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Review applications submitted by your B2B partners.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">

              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold">
                    Agency
                  </th>

                  <th className="text-left px-6 py-4 font-semibold">
                    Applicant
                  </th>

                  <th className="text-left px-6 py-4 font-semibold">
                    Email
                  </th>

                  <th className="text-left px-6 py-4 font-semibold">
                    Date
                  </th>

                  <th className="text-left px-6 py-4 font-semibold">
                    Status
                  </th>

                  <th className="text-right px-6 py-4 font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">

                {agents.map((agent) => (

                  <tr
                    key={agent.id}
                    className="hover:bg-gray-50"
                  >

                    <td className="px-6 py-5">
                      <p className="font-semibold text-gray-900">
                        {agent.agencyName}
                      </p>

                      <p className="text-xs text-gray-500 mt-1">
                        {agent.mobile}
                      </p>
                    </td>

                    <td className="px-6 py-5 text-gray-700">
                      {agent.applicantName}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {agent.email}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {agent.date}
                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          agent.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : agent.status === "Approved"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {agent.status}
                      </span>

                    </td>

                    <td className="px-6 py-5">

                      <div className="flex justify-end gap-2">

                        <button
                          className="px-4 py-2 rounded-lg bg-gray-900 text-white text-xs font-semibold hover:bg-gray-800"
                        >
                          View
                        </button>

                        {agent.status === "Pending" && (
                          <>
                            <button
                              onClick={() =>
                                approveAgent(agent.id)
                              }
                              className="px-4 py-2 rounded-lg bg-green-600 text-white text-xs font-semibold hover:bg-green-700"
                            >
                              Approve
                            </button>

                            <button
                              onClick={() =>
                                rejectAgent(agent.id)
                              }
                              className="px-4 py-2 rounded-lg bg-red-600 text-white text-xs font-semibold hover:bg-red-700"
                            >
                              Reject
                            </button>
                          </>
                        )}

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>
          </div>

        </div>

      </div>
    </main>
  );
}

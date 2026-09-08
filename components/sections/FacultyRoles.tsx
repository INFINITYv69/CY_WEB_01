"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Star, LayoutList } from "lucide-react";

export const facultyRolesData = [
  {
    name: "Dr. ARUNA KUMAR B T",
    designation: "Associate Professor & HOD",
    sub: "Dept. of CY & IY, GM University",
    photo: "https://res.cloudinary.com/dkg60zkba/image/upload/v1774188001/faculty/nmr2zfqaftglonhpsiuy.jpg",
    roleInDept: "HOD, Disciplinary & Anti Ragging Committee",
    additionalResponsibility: "Dept. Website, MOUs & Hackathon"
  },
  {
    name: "Dr. RACHANA P G",
    designation: "Asst. Professor",
    sub: "GM University",
    photo: "https://res.cloudinary.com/dkg60zkba/image/upload/v1774186811/faculty/y6ae6gg2x3tubgga7mf7.jpg",
    roleInDept: "Research, WEC Member",
    additionalResponsibility: "NIL"
  },
  {
    name: "Ms. SWATHI A",
    designation: "Asst. Professor",
    sub: "GM University",
    photo: "https://res.cloudinary.com/dkg60zkba/image/upload/v1774186868/faculty/qp99ezxxg2anwihurhbc.png",
    roleInDept: "Academic, Internal Assessment (IA)",
    additionalResponsibility: "Class Teacher - IY2A & Mentor"
  },
  {
    name: "Ms. SHWETHA D S",
    designation: "Asst. Professor",
    sub: "GM University",
    photo: "https://res.cloudinary.com/dkg60zkba/image/upload/v1774186907/faculty/fa7dhkpotokr0smvrvqk.png",
    roleInDept: "Idea Lab, Innovation & Entrepreneurship, ERP",
    additionalResponsibility: "Mentor & Class Teacher - CY2B"
  },
  {
    name: "Ms. MADHU M C",
    designation: "Asst. Professor",
    sub: "GM University",
    photo: "https://res.cloudinary.com/dkg60zkba/image/upload/v1774936613/faculty/1000047973_jpg_1774936613.jpg",
    roleInDept: "EMS, Student Affairs",
    additionalResponsibility: "Mentor & Class Teacher - IY1A"
  },
  {
    name: "VIDYA H G",
    designation: "Asst. Professor",
    sub: "GM University",
    photo: "https://res.cloudinary.com/dkg60zkba/image/upload/v1774936588/faculty/1000047974_jpg_1774936588.jpg",
    roleInDept: "Micro-Credentials, Immersion Programme",
    additionalResponsibility: "Class Teacher - CY2A & Mentor"
  },
  {
    name: "BHOOMIKA G S",
    designation: "Asst. Professor",
    sub: "GM University",
    photo: "/cyberweb/bhoomika.jpg",
    roleInDept: "Cultural, Hackathon",
    additionalResponsibility: "Class Teacher - CY2A & Mentor"
  },
  {
    name: "Mr. NANDAN KURDEKAR",
    designation: "Asst. Professor",
    sub: "GM University",
    photo: "/cyberweb/nandan.png",
    roleInDept: "Placement & Internship",
    additionalResponsibility: "Class Teacher - IY3A & Mentor"
  },
  {
    name: "Ms. JABEEN TAJ M K",
    designation: "Asst. Professor",
    sub: "GM University",
    photo: "/cyberweb/jabeen.png",
    roleInDept: "NCC, NSS, Sports & Yoga",
    additionalResponsibility: "Class Teacher - CY3B & Mentor"
  },
  {
    name: "Ms. RAKSHITHA G B",
    designation: "Faculty Member",
    sub: "GM University",
    photo: "/cyberweb/rakshita.png",
    roleInDept: "LEAP & TC",
    additionalResponsibility: "Mentor & Class Teacher - CY1A"
  },
  {
    name: "MR. PAVAN N T",
    designation: "Faculty Member",
    sub: "GM University",
    photo: "https://res.cloudinary.com/dkg60zkba/image/upload/v1774186979/faculty/fsmxyknyr8ke2wzpep5j.png",
    roleInDept: "Admission, DQAC",
    additionalResponsibility: "Mentor - CY2B"
  },
  {
    name: "Ms. PUSHPA U",
    designation: "Faculty Member",
    sub: "GM University",
    photo: "/cyberweb/pushpa.png",
    roleInDept: "5S, Admission",
    additionalResponsibility: "NIL"
  }
];

export default function FacultyRoles() {
  return (
    <section id="faculty-roles" className="py-24 px-6 lg:px-16 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-text-muted mb-2">Department Structure</p>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary flex items-center justify-center gap-4">
            <LayoutList size={40} className="text-neon-cyan" />
            Roles of <span className="text-neon-cyan">Faculty</span>
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-sm md:text-base font-orbitron text-text-primary uppercase tracking-wider">
                  <th className="py-4 px-3 font-bold w-12 text-center whitespace-nowrap">Sl.</th>
                  <th className="py-4 px-4 font-bold w-[30%]">Staff Name & Photo</th>
                  <th className="py-4 px-4 font-bold w-[25%]">Role in Dept.</th>
                  <th className="py-4 px-4 font-bold w-[45%]">Additional Responsibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {facultyRolesData.map((staff, idx) => (
                  <motion.tr 
                    key={staff.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="hover:bg-slate-50/80 transition-colors group"
                  >
                    <td className="py-4 px-3 text-center font-bold text-slate-400 text-sm">
                      {idx + 1}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-blue-700 via-blue-500 to-cyan-400 shrink-0 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300">
                          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white bg-white">
                            <img src={staff.photo} alt={staff.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-slate-800 text-sm md:text-base whitespace-nowrap">{staff.name}</div>
                          <div className="text-xs text-sky-600 font-medium tracking-wide whitespace-nowrap">{staff.designation}</div>
                          <div className="text-xs text-slate-400 whitespace-nowrap">{staff.sub}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-neon-magenta shrink-0 mt-0.5 opacity-70" />
                        <span className="font-medium text-text-primary/80 leading-relaxed text-sm">{staff.roleInDept}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-neon-green shrink-0 mt-0.5 opacity-70" />
                        <span className="font-medium text-text-primary/80 leading-relaxed text-sm">{staff.additionalResponsibility}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

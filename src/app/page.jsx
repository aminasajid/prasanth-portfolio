"use client";

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectMobile from "@/components/ProjectMobile";


export default function Home() {
  // Create refs for each ProjectCard

  return (
    <>
      <Header />

      <Banner />
      <p className="text-[#555] text-xl font-bold uppercase text-center px-3 py-6 md:py-24">
        NO BS, Lets Dive Straight in to some designs
      </p>

      {(() => {
        const projects = [
          {
            name: 'LOYALTRI',
            headline: 'Designed By HR for HR',
            subheading: 'Core HRMS Platform',
            cardImage: '/images/Loyatri.webp',
            cardBgColor: '#613CEB',
            linkText: 'Get a Sneak Peek',
            linkHref: '#',
            detailsTitle:
              'Loyaltri offers a fully integrated Human Resource Management System covering the full employee lifecycle:',
            features: [
              'Attendance Tracking',
              'Employee Analytics',
              'Payroll Management',
              'Expenses & Invoicing',
              'Smooth On & Offboarding Process',
            ],
            detailsImage: '/images/loyatri-2.webp',
          },
          {
            name: 'MOTUSONE',
            headline: 'Easy Event Transportation',
            subheading: 'Logistics',
            cardImage: '/images/motusone.webp',
            cardBgColor: '#3A66D0',
            linkText: 'Get a Sneak Peek',
            linkHref: '#',
            detailsTitle:
              'Eliminate wasted time on manual payroll calculations. Leverage automated payrolls, tax updates and payment processes to completion.',
            features: [
              'Fleet Live Tracking & Status Update',
              'Event Transportation Analytics',
              'MIS Event Overview',
              'Vehicle And Driver Commission Management',
              'Mobile & Web Application Management',
            ],
            detailsImage: '/images/motusone-2.webp',
          },
          {
            name: 'SEED',
            headline: 'Care in Everywhere!',
            subheading: 'Students Special Education',
            cardImage: '/images/seed.webp',
            cardBgColor: '#30D5C7',
            linkText: 'Get a Sneak Peek',
            linkHref: '#',
            detailsTitle:
              'Eliminate wasted time on manual payroll calculations. Leverage automated payrolls, tax updates and payment processes to completion.',
            features: [
              'Institution Management',
              'Automated Student Improvment Forms',
              'Personal Progression Tracking',
              'Student and School Overview',
              'Both Skill & Subject wise Improvement Plans ',
            ],
            detailsImage: '/images/seed-2.webp',
          }
        ];

        return (
          <>
            {projects.map((project, index) => (
              <div key={index} className={index === 0 ? "mt-0" : "mt-12"}>
                {/* Mobile combined view (visible up to 1024px) */}
                <div className="lg:hidden">
                  <ProjectMobile project={project} />
                </div>

                {/* Desktop / Tablet original layout (from 1024px and up) */}
                <div className="hidden lg:block">
                  <ProjectCard project={project} />
                  <div>
                    <ProjectDetails project={project} />
                  </div>
                </div>
              </div>
            ))}
          </>
        );
      })()}

      <Footer />
    </>
  );
}

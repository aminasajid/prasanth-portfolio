"use client";

import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Component imports
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LatestProjects from "@/components/LatestProjects";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectMobile from "@/components/ProjectMobile";
import BaseModal from "@/components/modal/BaseModal";
import CaseStudyModal from "@/components/modal/CaseStudyModal";

// Data imports
import projects from "@/data/projects";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [activeProject, setActiveProject] = React.useState(null)
  const latestStartRef = React.useRef(null)

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger)

    // Only apply background transitions on desktop/tablet
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (!isDesktop) {
      // Keep background white on mobile
      gsap.set([document.documentElement, document.body], { backgroundColor: '#FFFFFF' })
      return;
    }

    // Create a ScrollTrigger for the Latest Projects section to reset background to white
    const latestTrigger = ScrollTrigger.create({
      trigger: latestStartRef.current,
      start: 'top 85%',
      end: 'bottom 20%',
      onEnter: () => {
        gsap.to([document.documentElement, document.body], {
          backgroundColor: '#FFFFFF',
          duration: 0.8,
          ease: 'power2.inOut',
          overwrite: true
        })
      },
      onEnterBack: () => {
        gsap.to([document.documentElement, document.body], {
          backgroundColor: '#FFFFFF',
          duration: 0.8,
          ease: 'power2.inOut',
          overwrite: true
        })
      }
    })

    return () => {
      latestTrigger.kill()
    }
  }, [])

  const openProjectModal = (project) => {
    setActiveProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    // Keep activeProject for animation smoothness; clear after close if desired
  }

  return (
    <main className="relative">
      {/* Header Section */}
      <Header />

      {/* Hero Banner */}
      <Banner />

      <section className="px-4">
        {/* Section Divider */}
        <section className="text-center px-0 py-6 md:py-24">
          <p className="text-[#555] text-lg md:text-xl font-bold uppercase">
            NO BS, Let's Dive Straight into Some Designs
          </p>
        </section>

        {/* Projects Section */}
        <section className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <article key={project.name || index} className={index === 0 ? "mt-0" : "mt-8 md:mt-12"}>
              {/* Mobile combined view (visible up to 1024px) */}
              <div className="lg:hidden">
                <ProjectMobile project={project} onOpen={openProjectModal} />
              </div>

              {/* Desktop / Tablet layout (from 1024px and up) */}
              <div className="hidden lg:block">
                <ProjectCard project={project} onOpen={openProjectModal} />
                <ProjectDetails project={project} useAccentBackground={index === 2} />
              </div>
            </article>
          ))}
        </section>

        {/* Latest Projects Anchor */}
        <div ref={latestStartRef} aria-hidden="true" className="h-px" />

        {/* Latest Projects Section */}
        <section className="my-12 md:my-20">
          <LatestProjects />
        </section>

        {/* Footer */}
        <Footer />

        {/* Case Study Modal */}
        <BaseModal isOpen={isModalOpen} onClose={closeProjectModal}>
          {activeProject && (
            <CaseStudyModal project={activeProject} />
          )}
        </BaseModal>
      </section>
    </main>
  );
}

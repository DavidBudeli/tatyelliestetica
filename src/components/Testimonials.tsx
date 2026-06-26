"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { feedbackImages, feedbackVideos } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-shell bg-tatyelli-beige">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <p className="eyebrow">Depoimentos</p>
          <h2 className="heading-lg">Feedbacks reais de clientes</h2>
          <p className="body-copy mt-4">
            Prints e vídeos compartilhados como prova social. Resultados e percepções podem variar conforme cada pessoa, rotina e protocolo indicado.
          </p>
        </motion.div>

        <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:thin] md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
          {feedbackImages.map((feedback) => (
            <motion.article
              key={feedback.src}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              className="min-w-[78vw] snap-center rounded-panel border border-tatyelli-green/10 bg-white p-3 shadow-soft min-[430px]:min-w-[320px] md:min-w-0"
            >
              <Image
                src={feedback.src}
                alt={feedback.title}
                width={1152}
                height={2048}
                className="aspect-[9/14] w-full rounded-md bg-tatyelli-offwhite object-contain"
              />
              <strong className="mt-4 block text-tatyelli-green-dark">{feedback.title}</strong>
              <p className="mt-1 text-sm leading-6 text-neutral-600">{feedback.description}</p>
            </motion.article>
          ))}

          {feedbackVideos.map((video, index) => (
            <motion.article
              key={video}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              className="min-w-[78vw] snap-center rounded-panel border border-tatyelli-green/10 bg-white p-3 shadow-soft min-[430px]:min-w-[320px] md:min-w-0"
            >
              <video controls preload="metadata" playsInline className="aspect-[9/14] w-full rounded-md bg-tatyelli-green-dark object-cover">
                <source src={video} type="video/mp4" />
              </video>
              <strong className="mt-4 block text-tatyelli-green-dark">Feedback em vídeo {index + 1}</strong>
              <p className="mt-1 text-sm leading-6 text-neutral-600">Conteúdo disponível para reprodução manual.</p>
            </motion.article>
          ))}
        </div>

        <p className="mt-5 max-w-3xl text-sm leading-6 text-neutral-600">
          Os feedbacks demonstram experiências individuais. Procedimentos são indicados após avaliação e os resultados podem variar.
        </p>
      </div>
    </section>
  );
}

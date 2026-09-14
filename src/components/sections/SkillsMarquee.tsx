import { Chip } from "@/components/ui/Chip";
import { skills } from "@/content/skills";

/** A lista é duplicada para o loop do marquee fechar sem costura. */
const track = [...skills, ...skills];

export function SkillsMarquee() {
  return (
    <section>
      <h2 className="mb-5 font-mono text-xs font-medium text-ink-muted">
        Tecnologias
      </h2>
      <div className="marquee">
        <div className="marquee-track">
          {track.map((skill, index) => (
            <Chip
              key={`${skill}-${index}`}
              size="lg"
              ariaHidden={index >= skills.length}
            >
              {skill}
            </Chip>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Button } from "../components/Button";
import { Figure } from "../components/Figure";
import { Link } from "../components/Link";
import { List } from "../components/List";
import { Page } from "../layouts/Page";
import gdcrImg from "../public/static/img/gdcr19.jpeg";

export default function Homepage() {
  return (
    <Page>
      <Page.Seo>
        <Page.Seo.Url>https://tddworkshop.com/</Page.Seo.Url>

        <Page.Seo.Title>Escribe mejor software, de manera sostenible</Page.Seo.Title>

        <Page.Seo.Description>
          Descubre y aprende TDD a través de una formación práctica y completa. Sin bullshit.
        </Page.Seo.Description>

        <Page.Seo.Image>https://tddworkshop.com/static/img/social_es.png</Page.Seo.Image>
      </Page.Seo>

      <Page.Main>
        <section className="Hero">
          <p>
            Aprende la metodología que te ayuda a escribir <strong>mejor software</strong>, de manera{" "}
            <strong>sostenible</strong>.
          </p>

          <div className="Hero__Buttons">
            <Button variant="outline" href="#workshop" className="Hero__Buttons__Button">
              Conoce el taller
            </Button>

            <Button variant="solid" href="#contact" className="Hero__Buttons__Button">
              Contrátame
            </Button>
          </div>
        </section>

        <section className="Description">
          <h2 id="workshop">El taller</h2>

          <p>
            Formación in-house (cerrada, para una empresa) con{" "}
            <strong>10 horas dedicadas a aprender y practicar TDD</strong>. El taller está orientado a equipos que
            quieran introducirse a la metodología y disfrutar de un acercamiento completo, ameno y honesto (alejado de
            dogmatismos).
          </p>

          <h3>¿Qué aprenderemos?</h3>

          <List>
            <List.Item>Qué es TDD y cuáles son sus motivaciones y objetivos</List.Item>
            <List.Item>
              Qué tipos de tests podemos utilizar para practicar TDD (con sus diferentes ventajas y desventajas)
            </List.Item>
            <List.Item>
              Diferentes maneras de enfocar la práctica de TDD (<em>inside-out</em> vs <em>outside-in</em>)
            </List.Item>
            <List.Item>
              Conceptos generales sobre buen diseño de software y desarrollo orientado a objetos (también principios{" "}
              <Link href="https://en.wikipedia.org/wiki/SOLID">
                <b>SOLID</b>
              </Link>
              )
            </List.Item>
            <List.Item>
              Cómo introducir TDD en una base de código <em>legacy</em> (y de qué herramientas disponemos)
            </List.Item>
          </List>

          <h3>¿Cómo se desarrolla el taller?</h3>

          <p>
            Sólo hay una manera de aprender TDD: <strong>practicar, practicar y practicar</strong>. Por tanto, la
            formación será eminentemente práctica; con tiempo para trabajo individual y sesiones conjuntas de{" "}
            <em>live coding</em>. Además, resolveré las dudas del equipo tanto durante la formación como después (vía
            email).
          </p>

          <p>
            Por las circustancias actuales (COVID-19), las formaciones se realizarán de manera telemática, a través de{" "}
            <strong>herramientas online y vídeoconferencia</strong>.
          </p>

          <p>Las 10 horas de la formación se pueden repartir a lo largo de 4 ó 5 días.</p>

          <h3>Tecnologías y lenguajes de programación</h3>

          <p>
            El taller utiliza JavaScript/TypeScript como base (para los ejemplos), pero la formación se podrá
            desarrollar utilizando <strong>cualquier lenguaje</strong>.
          </p>

          <p>
            Además, el taller es agnóstico de front-end o back-end aunque se puede ajustar a las necesidades de cada
            grupo (por ejemplo, haciendo TDD sobre componentes React si la formación se imparte a un equipo que lo
            utilice).
          </p>

          <h3>Precio</h3>

          <p>
            El precio del taller es de <strong>250EUR/persona</strong> (+ IVA).
          </p>

          <h2 id="tdd">¿Por qué TDD?</h2>

          <p>
            TDD (del inglés: <em>test-driven development</em>) es una metodología que consiste en aplicar pequeños
            ciclos de desarrollo orientados a resolver casos de prueba. Como beneficio, ganaremos en productividad
            (siempre estamos desarrollando con un objetivo claro: hacer pasar la siguiente prueba), escribiendo a su vez
            código bien diseñado, fácil de probar y mantener.
          </p>

          <h2 id="contact">Contrátame</h2>

          <p>
            ¡Hola! 👋 Soy{" "}
            <Link href="https://www.linkedin.com/in/sergioalvarezsuarez/" target="_blank" rel="noreferrer">
              Sergio
            </Link>{" "}
            y llevo una década desarrollando software profesionalmente. Desde hace varios años, compagino mi actividad
            como desarrollador con el liderazgo de equipos de ingeniería, facilitando la adopción de buenas prácticas de
            ingeniería del software (continuous deployment, test-driven development).
          </p>

          <p>
            Si quieres contratar esta formación para tu empresa, escríbeme un mensaje y te responderé lo antes posible.
            También puedes escribirme un email a <strong>hola@codecoolture.com</strong>.
          </p>

          <Page.ContactForm successMessage="¡Mensaje recibido! Intentaré contestarte en menos de 48 horas.">
            <Page.ContactForm.Field name="email">
              <Page.ContactForm.Field.Label>Tu email</Page.ContactForm.Field.Label>
              <Page.ContactForm.Field.Hint>Lo utilizaré para responderte</Page.ContactForm.Field.Hint>
            </Page.ContactForm.Field>

            <Page.ContactForm.Field name="message">
              <Page.ContactForm.Field.Label>Mensaje</Page.ContactForm.Field.Label>
              <Page.ContactForm.Field.Hint>
                Este campo es <strong>opcional</strong>, pero puedes utilizarlo para contarme algo sobre ti o,
                simplemente, saludar :-)
              </Page.ContactForm.Field.Hint>
            </Page.ContactForm.Field>

            <Page.ContactForm.Submit>Enviar</Page.ContactForm.Submit>
          </Page.ContactForm>

          <h2>Material adicional</h2>

          <List>
            <List.Item>
              <Link href="https://bit.ly/34ZnpuO" target="_blank" rel="noreferrer">
                Lista de lecturas recomendadas para estudiar y aprender TDD
              </Link>
            </List.Item>

            <List.Item>
              <Link
                href="https://codecoolture.com/blog/applying-atdd-to-game-of-life/"
                target="_blank"
                rel="noreferrer"
              >
                Aplicando (A)TDD para resolver El Juego de la Vida
              </Link>
            </List.Item>
            <List.Item>
              <Link href="https://github.com/codecoolture/react-atdd-playground" target="_blank" rel="noreferrer">
                GitHub: codecoolture/react-atdd-playground
              </Link>
            </List.Item>
          </List>

          <div className="Picture">
            <Figure
              src={gdcrImg}
              alt="Sergio facilitando el Global Day of Coderetreat 2019 en Madrid"
              title="En acción en las oficinas de Spotahome (Madrid): hablando de TDD y buenas prácticas de desarrollo de software (2019)."
            />
          </div>
        </section>
      </Page.Main>

      <Page.Footer>
        <Page.Footer.Text>
          TDD es una práctica de referencia en equipos de software de alto rendimiento. En esta formación,
          profundizaremos en su filosofía y motivaciones además de introducir pequeños trucos para su aplicación en
          diferentes contextos, con el objetivo de que puedas incorporarla lo más rápido posible en tu rutina de
          trabajo.
        </Page.Footer.Text>

        <Page.Footer.Links>
          <Page.Footer.Link href="https://codecoolture.com" rel="noreferrer">
            Visita codecoolture.com
          </Page.Footer.Link>
        </Page.Footer.Links>

        <Page.Footer.Copy>&copy; 2021 The TDD Workshop</Page.Footer.Copy>
      </Page.Footer>
    </Page>
  );
}

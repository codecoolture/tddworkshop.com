import { Figure } from "../../components/Figure";
import { Link } from "../../components/Link";
import { List } from "../../components/List";
import { Page } from "../../layouts/Page";
import gdcrImg from "../../public/static/img/gdcr19.jpeg";

export default function Homepage() {
  return (
    <Page>
      <Page.Seo>
        <Page.Seo.Url>https://tddworkshop.com/en</Page.Seo.Url>

        <Page.Seo.Title>Learn how to write better software in a fast, sustainable way</Page.Seo.Title>

        <Page.Seo.Description>
          Descubre y aprende TDD a través de una formación práctica y completa. Basada en experiencia real y alejada de
          dogmatismos.
        </Page.Seo.Description>

        <Page.Seo.Image>https://tddworkshop.com/static/img/social_en.png</Page.Seo.Image>
      </Page.Seo>

      <Page.Header>
        <Page.Row>
          <Page.Header.Text>
            Learn how to write <strong>better software</strong>
            <br />
            in a fast, <strong>sustainable</strong> way.
          </Page.Header.Text>

          <Page.Header.Buttons>
            <Page.Header.Button variant="outline" href="#workshop">
              Read more about the workshop
            </Page.Header.Button>

            <Page.Header.Button variant="solid" href="#contact">
              Hire me
            </Page.Header.Button>
          </Page.Header.Buttons>
        </Page.Row>
      </Page.Header>

      <Page.Main>
        <Page.Row>
          <Page.Heading id="workshop">The workshop</Page.Heading>

          <Page.Text>
            <strong>16 horas dedicadas a aprender y practicar TDD</strong>. El taller está orientado a equipos que
            quieran introducirse a la metodología y disfrutar de un acercamiento completo, ameno y honesto (alejado de
            dogmatismos).
          </Page.Text>

          <Page.Subheading>¿Qué aprenderemos?</Page.Subheading>

          <List>
            <List.Item>Qué es TDD y cuáles son sus motivaciones y objetivos</List.Item>

            <List.Item>
              Qué tipos de tests podemos utilizar para practicar TDD (con sus diferentes ventajas y desventajas)
            </List.Item>

            <List.Item>
              Diferentes maneras de enfocar la práctica de TDD (<em>inside-out</em> vs <em>outside-in</em>)
            </List.Item>

            <List.Item>Conceptos generales sobre buen diseño de software</List.Item>

            <List.Item>
              Cómo introducir TDD en una base de código ya existente (y de qué herramientas disponemos)
            </List.Item>
          </List>

          <Page.Subheading>¿Cómo se desarrolla el taller?</Page.Subheading>

          <Page.Text>
            Sólo hay una manera de aprender TDD: <strong>practicar, practicar y practicar</strong>. Por tanto, la
            formación será eminentemente práctica; con tiempo para programar y sesiones conjuntas de{" "}
            <em>live coding</em>.
          </Page.Text>

          <Page.Text>
            Por las circustancias actuales (COVID-19), las formaciones se realizarán de manera telemática, a través de{" "}
            <strong>herramientas online y vídeoconferencia</strong> y se repartirá a lo largo de varios días.
          </Page.Text>

          <Page.Subheading>Tecnologías y lenguajes de programación</Page.Subheading>

          <Page.Text>
            La formación se puede desarrollar utilizando prácticamente <strong>cualquier lenguaje</strong>, pero los
            ejemplos y las sesiones de <em>live coding</em> utilizarán JavaScript/TypeScript.
          </Page.Text>

          <Page.Text>
            Además, el taller es agnóstico de front-end o back-end aunque se puede ajustar a las necesidades de cada
            grupo (por ejemplo, haciendo TDD sobre componentes React si la formación se imparte a un equipo que lo
            utilice).
          </Page.Text>

          <Page.Subheading>Precio</Page.Subheading>

          <Page.Text>
            El precio del taller es de <strong>250EUR/persona</strong> (+ IVA).
          </Page.Text>

          <Page.Heading id="tdd">¿Por qué TDD?</Page.Heading>

          <Page.Text>
            TDD (del inglés: <em>test-driven development</em>) es una metodología que consiste en aplicar pequeños
            ciclos de desarrollo orientados a resolver casos de prueba. Como beneficio, ganaremos en productividad
            (siempre estamos desarrollando con un objetivo claro: hacer pasar la siguiente prueba), escribiendo a su vez
            código bien diseñado, fácil de probar y mantener.
          </Page.Text>

          <Page.Subheading>Enlaces y materiales de interés</Page.Subheading>

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

          <Page.Heading id="contact">Contacto</Page.Heading>

          <Page.Text>
            ¡Hola! 👋 Soy{" "}
            <Link href="https://www.linkedin.com/in/sergioalvarezsuarez/" target="_blank" rel="noreferrer">
              Sergio
            </Link>{" "}
            y llevo una década desarrollando software profesionalmente. Desde hace varios años, compagino mi actividad
            como desarrollador con el liderazgo de equipos de ingeniería, facilitando la adopción de buenas prácticas de
            ingeniería del software (continuous deployment, test-driven development).
          </Page.Text>

          <Page.Text>
            Si quieres contratar esta formación para tu empresa, escríbeme un mensaje y te responderé lo antes posible.
            También puedes escribirme un email a <strong>hola@codecoolture.com</strong>.
          </Page.Text>

          <Page.ContactForm onSuccessMessage="Thank you! I will respond to you promptly.">
            <Page.ContactForm.Field name="email">
              <Page.ContactForm.Field.Label>Your email</Page.ContactForm.Field.Label>

              <Page.ContactForm.Field.Hint>Use an email where you want to receive my reply</Page.ContactForm.Field.Hint>

              <Page.ContactForm.Field.Input />

              <Page.ContactForm.Field.Error>Please, use a valid email.</Page.ContactForm.Field.Error>
            </Page.ContactForm.Field>

            <Page.ContactForm.Field name="message">
              <Page.ContactForm.Field.Label>Your message</Page.ContactForm.Field.Label>

              <Page.ContactForm.Field.Hint>
                This is <strong>optional</strong>. You may use it to ask for more information, tell me about your
                project, or say hi :-)
              </Page.ContactForm.Field.Hint>

              <Page.ContactForm.Field.TextArea numberOfRows={10} />
            </Page.ContactForm.Field>

            <Page.ContactForm.Submit>Send your message</Page.ContactForm.Submit>
          </Page.ContactForm>

          <Figure>
            <Figure.Image src={gdcrImg} alt="Sergio facilitando el Global Day of Coderetreat 2019 en Madrid" />

            <Figure.Caption>
              En acción en las oficinas de Spotahome (Madrid): hablando de TDD y buenas prácticas de desarrollo de
              software (2019).
            </Figure.Caption>
          </Figure>
        </Page.Row>
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
            Visit codecoolture.com
          </Page.Footer.Link>
        </Page.Footer.Links>

        <Page.Footer.Copy>{(year) => <>&copy; {year} The TDD Workshop</>}</Page.Footer.Copy>
      </Page.Footer>
    </Page>
  );
}

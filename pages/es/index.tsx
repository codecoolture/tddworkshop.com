import { Figure } from "../../components/Figure";
import { Link } from "../../components/Link";
import { List } from "../../components/List";
import { Page } from "../../layouts/Page";
import gdcrImg from "../../public/static/img/gdcr19.jpeg";

export default function Homepage() {
  return (
    <Page>
      <Page.Seo>
        <Page.Seo.Url>https://tddworkshop.com/es</Page.Seo.Url>

        <Page.Seo.Title>Escribe mejor software, de manera sostenible</Page.Seo.Title>

        <Page.Seo.Description>
          Descubre y aprende TDD a través de una formación práctica y completa. Basada en experiencia real y alejada de
          dogmatismos.
        </Page.Seo.Description>

        <Page.Seo.Image>https://tddworkshop.com/static/img/social_es.png</Page.Seo.Image>
      </Page.Seo>

      <Page.Header>
        <Page.Row>
          <Page.Header.Text>
            Aprende a escribir <strong>mejor software</strong>,<br />
            de manera <strong>sostenible</strong>.
          </Page.Header.Text>

          <Page.Header.Buttons>
            <Page.Header.Button variant="outline" href="#workshop">
              Conoce el taller
            </Page.Header.Button>

            <Page.Header.Button variant="solid" href="#contact">
              Reserva una sesión
            </Page.Header.Button>
          </Page.Header.Buttons>
        </Page.Row>
      </Page.Header>

      <Page.Main>
        <Page.Row>
          <Page.Heading>Por qué aprender TDD es una buena idea</Page.Heading>

          <Page.Text>
            Test-driven development es una metodología de programación que consiste en aplicar pequeños ciclos de
            desarrollo orientados a resolver casos de prueba. Este proceso (simple, pero no sencillo), aplicado de
            manera iterativa, nos guiará hasta haber construido una solución completamente funcional, favoreciendo dos
            beneficios clave: <strong>direccionalidad</strong> (siempre trabajamos con el objetivo de hacer pasar la
            siguiente prueba que nos acerque a resolver el problema final) y <strong>confianza</strong> (cada uno de
            nuestros cambios se verifica contra un conjunto de pruebas ya existentes).
          </Page.Text>

          <Page.Text>
            Aprende TDD y evita pérdidas de foco, bloqueos y sobreingeniería. En su lugar, dedica tiempo a resolver los
            problemas que realmente importan, entregando valor de manera sostenible mientras escribes un software mejor
            diseñado y más fácil de mantener.
          </Page.Text>

          <Page.Heading id="workshop">El taller</Page.Heading>

          <Page.Text>
            <strong>16 horas dedicadas a aprender y practicar TDD</strong>. El taller está orientado a equipos que
            quieran introducirse a la metodología y disfrutar de un acercamiento completo, ameno y honesto (alejado de
            dogmatismos).
          </Page.Text>

          <Page.Text>
            Como sólo hay una manera de aprender TDD (<strong>practicar, practicar y practicar</strong>), la formación
            será eminentemente práctica; con tiempo para programar en parejas y sesiones conjuntas de{" "}
            <em>live coding</em> (que utilizaré, fundamentalmente, para explicar varios conceptos).
          </Page.Text>

          <Page.Text>
            Por las circustancias actuales (COVID-19), las formaciones se realizarán de manera telemática, a través de{" "}
            <strong>herramientas online y vídeoconferencia</strong> y se repartirá a lo largo de varios días.
          </Page.Text>

          <Page.Subheading>¿Qué aprenderás?</Page.Subheading>

          <List>
            <List.Item>
              Qué es TDD, cuáles son sus motivaciones y objetivos, y cómo poder empezar a aplicarlo de manera efectiva.
            </List.Item>

            <List.Item>
              Qué tipos de tests podemos utilizar para practicar TDD (con sus diferentes ventajas y desventajas).
            </List.Item>

            <List.Item>
              Diferentes maneras de enfocar la práctica de TDD (<em>inside-out</em> vs <em>outside-in</em>).
            </List.Item>

            <List.Item>Conceptos generales sobre buen diseño de software.</List.Item>

            <List.Item>
              Cómo introducir TDD en una base de código ya existente utilizando <em>test doubles</em>.
            </List.Item>
          </List>

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

          <Figure>
            <Figure.Image src={gdcrImg} alt="Sergio facilitando el Global Day of Coderetreat 2019 en Madrid" />

            <Figure.Caption>
              En acción en las oficinas de Spotahome (Madrid): hablando de TDD y buenas prácticas de desarrollo de
              software (2019).
            </Figure.Caption>
          </Figure>

          <Page.Heading id="contact">Contacto</Page.Heading>

          <Page.Text>
            ¡Hola! 👋 Soy{" "}
            <Link href="https://www.linkedin.com/in/sergioalvarezsuarez/" target="_blank" rel="noreferrer">
              Sergio
            </Link>{" "}
            y llevo una década desarrollando software profesionalmente. Desde hace varios años, compagino mi actividad
            como desarrollador con el liderazgo de equipos de ingeniería, facilitando la adopción de buenas prácticas de
            ingeniería del software (continuous deployment, test-driven development, trunk-based development).
          </Page.Text>

          <Page.Text>
            Si quieres contratar esta formación para tu empresa, escríbeme un mensaje utilizando el formulario a
            continuación y te responderé lo antes posible. También puedes escribirme un email a hola@codecoolture.com.
          </Page.Text>

          <Page.Subheading>Material publicado</Page.Subheading>

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
                codecoolture/react-atdd-playground
              </Link>
              : plantilla para practicar TDD en aplicaciones JavaScript
            </List.Item>
          </List>

          <Page.Subheading>¿Hablamos?</Page.Subheading>

          <Page.ContactForm onSuccessMessage="¡Gracias! Mensaje recibido.">
            <Page.ContactForm.Field name="email">
              <Page.ContactForm.Field.Label>Tu email</Page.ContactForm.Field.Label>

              <Page.ContactForm.Field.Hint>Lo utilizaré para responderte</Page.ContactForm.Field.Hint>

              <Page.ContactForm.Field.Input />

              <Page.ContactForm.Field.Error>Por favor, introduce un email válido.</Page.ContactForm.Field.Error>
            </Page.ContactForm.Field>

            <Page.ContactForm.Field name="message">
              <Page.ContactForm.Field.Label>Mensaje</Page.ContactForm.Field.Label>

              <Page.ContactForm.Field.Hint>
                Este campo es <strong>opcional</strong>, pero puedes utilizarlo para contarme algo sobre ti o,
                simplemente, saludar :-)
              </Page.ContactForm.Field.Hint>

              <Page.ContactForm.Field.TextArea numberOfRows={5} />
            </Page.ContactForm.Field>

            <Page.ContactForm.Submit>Enviar tu mensaje</Page.ContactForm.Submit>
          </Page.ContactForm>
        </Page.Row>
      </Page.Main>

      <Page.Footer>
        <Page.Footer.Languages>
          <Page.Footer.Languages.Title>Idioma</Page.Footer.Languages.Title>

          <Page.Footer.Languages.List>
            <Page.Footer.Languages.Language>Español</Page.Footer.Languages.Language>
            <Page.Footer.Languages.Language href="/en">English</Page.Footer.Languages.Language>
          </Page.Footer.Languages.List>
        </Page.Footer.Languages>

        <Page.Footer.Text>
          TDD es una práctica de referencia en equipos de software de alto rendimiento. En esta formación,
          profundizaremos en su filosofía y motivaciones además de introducir pequeños trucos para su aplicación en
          diferentes contextos, con el objetivo de que puedas incorporarla lo más rápido posible en tu rutina de
          trabajo.
        </Page.Footer.Text>

        <Page.Footer.Copy>{(year) => <>&copy; {year} The TDD Workshop</>}</Page.Footer.Copy>
      </Page.Footer>
    </Page>
  );
}

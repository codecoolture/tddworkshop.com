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
              Book a training session
            </Page.Header.Button>
          </Page.Header.Buttons>
        </Page.Row>
      </Page.Header>

      <Page.Main>
        <Page.Row>
          <Page.Heading id="workshop">About the workshop</Page.Heading>

          <Page.Text>
            People attending this workshop will enjoy a 16-hours introduction to the TDD practice. Even if it is
            impossible to master test-driven development in a couple of days, participants will end with a complete
            understanding of the methodology and be ready to start on the right foot.
          </Page.Text>

          <Page.Subheading>You will learn</Page.Subheading>

          <List>
            <List.Item>
              How to start doing TDD (and, more importantly, why you should not write THAT first test)
            </List.Item>

            <List.Item>
              How to write good tests and how different tests (unitary, integration) enable different ways to practice
              TDD
            </List.Item>

            <List.Item>How to write testable software</List.Item>

            <List.Item>How to use test doubles to simplify writing tests for legacy applications</List.Item>
          </List>

          <Page.Subheading>How is the workshop?</Page.Subheading>

          <Page.Text>
            There is only one way to learn test-driven development: <strong>practice, practice, and practice</strong>.
            Therefore, the workshop is hands-on, with plenty of time to do pair-programming and live coding sessions
            (which I will use to explain different concepts).
          </Page.Text>

          <Page.Text>
            Due to COVID-19, the workshop is primarily online, and we can divide the training sessions into several
            days.
          </Page.Text>

          <Page.Subheading>Programming languages and technologies</Page.Subheading>

          <Page.Text>
            <strong>The workshop is language-agnostic</strong>, even though it will use JavaScript/TypeScript for the
            examples and live coding sessions. For teams working with React, we can adapt the exercises to practice TDD
            on components and front-end applications.
          </Page.Text>

          <Page.Subheading>Pricing</Page.Subheading>

          <Page.Text>
            The price is <strong>250EUR per participant</strong> (VAT not included).
          </Page.Text>

          <Page.Heading>Why should I care about TDD?</Page.Heading>

          <Page.Text>
            There are few techniques as powerful and yet widely misunderstood as test-driven development. Although not a
            silver bullet, TDD enables two often-overlooked benefits: <strong>direction</strong> (short test 🔄 code
            cycles towards a complete solution) and <strong>confidence</strong> (verifying your changes against a
            working test suite).
          </Page.Text>

          <Page.Text>
            Learn TDD and become a more productive software engineer: avoid blockers and overengineering. Instead, focus
            on delivering value (a.k.a, fixing your users' pains) at a fast, sustainable pace while writing
            well-designed, well-tested code.
          </Page.Text>

          <Page.Subheading>Learning material</Page.Subheading>

          <List>
            <List.Item>
              <Link href="https://bit.ly/34ZnpuO" target="_blank" rel="noreferrer">
                A list of resources that helped me during my journey learning TDD
              </Link>
            </List.Item>

            <List.Item>
              <Link
                href="https://codecoolture.com/blog/applying-atdd-to-game-of-life/"
                target="_blank"
                rel="noreferrer"
              >
                [Spanish] Applying (A)TDD to resolve the Game Of Life's kata.
              </Link>
            </List.Item>
            <List.Item>
              <Link href="https://github.com/codecoolture/react-atdd-playground" target="_blank" rel="noreferrer">
                codecoolture/react-atdd-playground
              </Link>
              : Template to (deliberate) practice your test-driven development skills.
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

              <Page.ContactForm.Field.TextArea numberOfRows={5} />
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

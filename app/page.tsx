import Link from "next/link"
import { Calendar, Clock, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-5xl flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Dr. Cristian Grudtner</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Início
            </Link>
            <Link href="#sobre" className="text-sm font-medium transition-colors hover:text-primary">
              Sobre
            </Link>
            <Link href="#servicos" className="text-sm font-medium transition-colors hover:text-primary">
              Serviços
            </Link>
            <Link href="#agendamento" className="text-sm font-medium transition-colors hover:text-primary">
              Agendamento
            </Link>
            <Link href="#contato" className="text-sm font-medium transition-colors hover:text-primary">
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="#agendamento">Agendar Consulta</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Psicologia para o seu bem-estar
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Olá, sou o Dr. Cristian Grudtner, psicólogo clínico dedicado a ajudar você a encontrar equilíbrio e
                  saúde mental através de uma abordagem personalizada e acolhedora.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="#agendamento">Agendar Consulta</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Link href="#servicos">Conhecer Serviços</Link>
                  </Button>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=550&width=450"
                alt="Dr. Cristian Grudtner"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                width={550}
                height={450}
              />
            </div>
          </div>
        </section>

        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre Mim</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Com mais de 10 anos de experiência clínica, sou especializado em terapia cognitivo-comportamental e
                  abordagens integrativas. Meu objetivo é proporcionar um espaço seguro e acolhedor onde você possa
                  explorar seus pensamentos, sentimentos e comportamentos para alcançar uma vida mais plena e
                  significativa.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Consultório"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  width={400}
                  height={400}
                />
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Formação e Credenciais</h3>
                  <ul className="space-y-3 text-muted-foreground text-left">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      Graduação em Psicologia - Universidade Federal
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      Mestrado em Psicologia Clínica
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      Especialização em Terapia Cognitivo-Comportamental
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      Membro do Conselho Regional de Psicologia
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Serviços</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofereço uma variedade de serviços terapêuticos adaptados às suas necessidades específicas.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>Terapia Individual</CardTitle>
                    <CardDescription>Atendimento personalizado para adultos e adolescentes</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p>
                      Sessões individuais focadas em questões como ansiedade, depressão, estresse, relacionamentos e
                      desenvolvimento pessoal.
                    </p>
                  </CardContent>
                </Card>
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>Terapia de Casal</CardTitle>
                    <CardDescription>Fortalecendo relacionamentos e melhorando a comunicação</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p>
                      Auxílio para casais que enfrentam dificuldades de comunicação, conflitos recorrentes ou desejam
                      fortalecer seu relacionamento.
                    </p>
                  </CardContent>
                </Card>
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>Orientação Profissional</CardTitle>
                    <CardDescription>Descobrindo caminhos e potenciais</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p>
                      Apoio para identificar habilidades, interesses e valores para tomar decisões de carreira mais
                      alinhadas com seu perfil.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="agendamento" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Agendamento</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Agende sua consulta de forma rápida e simples.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Formulário de Agendamento</CardTitle>
                    <CardDescription>Preencha os dados para solicitar uma consulta</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-6">
                      <div className="grid gap-2">
                        <label htmlFor="name" className="text-sm font-medium">Nome Completo</label>
                        <input
                          id="name"
                          className="w-full p-2 border rounded-md"
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                        <input
                          id="email"
                          type="email"
                          className="w-full p-2 border rounded-md"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="phone" className="text-sm font-medium">Telefone</label>
                        <input
                          id="phone"
                          className="w-full p-2 border rounded-md"
                          placeholder="(00) 00000-0000"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="service" className="text-sm font-medium">Tipo de Atendimento</label>
                        <select id="service" className="w-full p-2 border rounded-md" required>
                          <option value="">Selecione uma opção</option>
                          <option value="individual">Terapia Individual</option>
                          <option value="couple">Terapia de Casal</option>
                          <option value="career">Orientação Profissional</option>
                        </select>
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="date" className="text-sm font-medium">Data Preferencial</label>
                        <input id="date" type="date" className="w-full p-2 border rounded-md" required />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="time" className="text-sm font-medium">Horário Preferencial</label>
                        <select id="time" className="w-full p-2 border rounded-md" required>
                          <option value="">Selecione um horário</option>
                          <option value="morning">Manhã (8h às 12h)</option>
                          <option value="afternoon">Tarde (13h às 17h)</option>
                          <option value="evening">Noite (18h às 20h)</option>
                        </select>
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="message" className="text-sm font-medium">Mensagem (opcional)</label>
                        <textarea
                          id="message"
                          className="w-full p-2 border rounded-md"
                          rows={3}
                          placeholder="Informações adicionais que considere relevantes"
                        ></textarea>
                      </div>
                      <Button type="submit" className="w-full">
                        Solicitar Agendamento
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Informações Importantes</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 mt-0.5 text-primary" />
                        <div>
                          <h4 className="font-medium">Duração das Sessões</h4>
                          <p className="text-sm text-muted-foreground">
                            As sessões têm duração de 50 minutos. Recomenda-se chegar com 10 minutos de antecedência.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 mt-0.5 text-primary" />
                        <div>
                          <h4 className="font-medium">Horário de Atendimento</h4>
                          <p className="text-sm text-muted-foreground">
                            Segunda a sexta: 8h às 20h
                            <br />
                            Sábados: 8h às 12h (mediante agendamento prévio)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                        <div>
                          <h4 className="font-medium">Endereço</h4>
                          <p className="text-sm text-muted-foreground">
                            Rua das Flores, 123 - Centro
                            <br />
                            Edifício Saúde Mental, Sala 302
                            <br />
                            CEP: 00000-000
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Política de Cancelamento</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Cancelamentos devem ser realizados com no mínimo 24 horas de antecedência. Caso contrário, a
                        sessão será cobrada integralmente. Para reagendamentos, entre em contato por telefone ou e-mail.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contato</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Entre em contato para mais informações ou dúvidas.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Informações de Contato</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>(00) 00000-0000</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span>contato@cristiangrudtner.com.br</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Rua das Flores, 123 - Centro</span>
                    </div>
                    <div className="pt-4">
                      <h4 className="font-medium mb-2">Redes Sociais</h4>
                      <div className="flex gap-4 justify-center">
                        <a href="#" className="text-muted-foreground hover:text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          </svg>
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Envie uma Mensagem</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="contact-name">Nome</label>
                        <input
                          id="contact-name"
                          className="w-full p-2 border rounded-md"
                          placeholder="Seu nome"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="contact-email">E-mail</label>
                        <input
                          id="contact-email"
                          type="email"
                          className="w-full p-2 border rounded-md"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="contact-subject">Assunto</label>
                        <input
                          id="contact-subject"
                          className="w-full p-2 border rounded-md"
                          placeholder="Assunto da mensagem"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="contact-message">Mensagem</label>
                        <textarea
                          id="contact-message"
                          className="w-full p-2 border rounded-md"
                          rows={4}
                          placeholder="Sua mensagem"
                          required
                        ></textarea>
                      </div>
                      <Button type="submit" className="w-full">
                        Enviar Mensagem
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container mx-auto max-w-5xl flex flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Dr. Cristian Grudtner. Todos os direitos reservados. CRP: XX/XXXXX
          </p>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Desenvolvido com ❤️ por{" "}
            <a href="#" className="font-medium underline underline-offset-4">
              Studio Web
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}


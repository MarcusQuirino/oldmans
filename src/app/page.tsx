import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Users, Calendar, MapPin } from 'lucide-react'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/75 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-serif text-amber-700 dark:text-amber-500">Old Mans</a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#sobre" className="font-serif hover:text-amber-700 dark:hover:text-amber-500 transition-colors">Sobre</a>
              <a href="#atividades" className="font-serif hover:text-amber-700 dark:hover:text-amber-500 transition-colors">Atividades</a>
              <a href="/boa-de-hj" className="font-serif hover:text-amber-700 dark:hover:text-amber-500 transition-colors">Qual a boa de hoje?</a>
            </nav>
            <SignedOut>
              <SignInButton>
                <Button size="sm" className="bg-amber-700 text-white hover:bg-amber-800 font-serif">
                  Entrar
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>

      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#sobre" className="block px-3 py-2 rounded-md text-base font-serif hover:bg-muted">Sobre</a>
          <a href="#atividades" className="block px-3 py-2 rounded-md text-base font-serif hover:bg-muted">Atividades</a>
          <a href="#contato" className="block px-3 py-2 rounded-md text-base font-serif hover:bg-muted">Contato</a>
        </div>
      </div>

      <main>
        <section className="relative w-full h-[80vh]">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero.webp')" }}
          >
             <div className="absolute inset-0 bg-black/60"> {/* Darker overlay for more contrast */}
              <div className="h-full flex flex-col items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4">
                    Bem-vindo ao Old Mans
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl font-serif text-stone-300 mb-8">
                    Onde a distinção encontra a camaradagem
                  </p>
                  <Button size="lg" className="bg-amber-700 text-white hover:bg-amber-800 font-serif">
                    Junte-se a Nós <ChevronRight className="ml-2" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Sobre Nós</h2>
            <p className="text-lg text-center max-w-3xl mx-auto text-muted-foreground">
            Somos um grupo único, costurado pelas memórias de todos que já fizeram parte desta história. Cada amigo que passou deixou um pedaço de si: risadas, ideias, histórias e, às vezes, até saudades. Somos uma colcha de retalhos viva, onde cada retalho é um capítulo que nos transforma e permanece.
            Não importa quem está aqui hoje ou quem estará amanhã. Nosso grupo transcende o tempo e as mudanças, porque é feito de algo mais duradouro: a essência de cada amizade que já compartilhou este espaço.
            Aqui, o passado e o presente se encontram, e o futuro é sempre bem-vindo. Somos uma mistura de quem já fomos e de quem ainda seremos, unidos por um único propósito: celebrar a conexão que nos torna mais fortes e mais completos.
            Seja bem-vindo à nossa história – encha sua taça e um brinde ao nosso amizade.
            </p>
          </div>
        </section>

        <section id="atividades" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">Nossas Atividades</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-amber-700 dark:text-amber-500 mb-4" />
                  <h3 className="text-xl font-serif font-semibold mb-2 text-foreground">Encontros Sociais</h3>
                  <p className="text-muted-foreground">Encontros <span className="line-through">regulares</span> de vez em quando para colocar o papo em dia. Os fdp tão sempre liso quando é pra sair com os gu</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <Calendar className="w-12 h-12 text-amber-700 dark:text-amber-500 mb-4" />
                  <h3 className="text-xl font-serif font-semibold mb-2 text-foreground">Atividades em Grupo</h3>
                  <p className="text-muted-foreground">Contruir um tanque de guerra, construir um arcade, pegar cogumelos, coisas que a gente sem duvida alguma vai fazer um dia, confia</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-amber-700 dark:text-amber-500 mb-4" />
                  <h3 className="text-xl font-serif font-semibold mb-2 text-foreground">Passeios e Viagens</h3>
                  <p className="text-muted-foreground">KKKKKKKKKKKKKKKKK os cara n vão no Lami mas vão viajar sim</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground font-serif">
            © {new Date().getFullYear()} Old Mans. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

import Image from 'next/image';
import Link from 'next/link';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import partners from './api/partners.json';
import { ComponentProps } from 'react';

const Cover = () => {
  return (
    <div
      className="flex items-center flex-col justify-center p-1"
      style={{ height: 'calc(100vh - 50vh)' }}
    >
      <h1 className="text-center text-7xl font-bold text-primary-900 mb-4">
        LAMIA
      </h1>
      <h3 className="text-center text-2xl  font-bold text-primary-900 mb-1">
        LABORATÓRIO DE APRENDIZADO DE MÁQUINA APLICADO À INDÚSTRIA
      </h3>
      <p className="text-center text-xl font-normal text-secondary-900">
        UTFPR Campus Santa Helena
      </p>
    </div>
  );
};

interface ISectionProps extends ComponentProps<'section'> {
  title: string;
  hasDivider?: boolean;
}

const Section: React.FC<ISectionProps> = ({
  title,
  children,
  hasDivider = true,
  ...rest
}) => {
  return (
    <section className="flex flex-col w-full mb-10" {...rest}>
      <h2 className="text-3xl md:text-5xl font-medium text-primary-900 mb-10 max-md:text-center">
        {title}
      </h2>
      {children}
      {hasDivider && <hr className="border bg-black-200 mt-10" />}
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Cover />
      <div className="w-full flex items-center justify-center">
        <main className="flex flex-col gap-8 min-h-screen w-full max-w-7xl px-4">
          <Section
            title="Quer desenvolver pesquisa ou produtos de I.A?"
            id="EntreEmContato"
          >
            <div className="flex max-md:flex-col justify-between gap-6 items-center">
              <div className="flex flex-col gap-8 flex-1 max-md:w-full">
                <h3 className="text-secondary-600 font-bold text-xl ax-w-lg">
                  O LAMIA é o local ideal, seja você pesquisador ou empresa.
                  <br />
                  Somos especialistas em:
                </h3>
                <ul className="h-full flex flex-col gap-5 max-w-lg mr-6">
                  <li className="flex gap-4 items-start">
                    <Image
                      src="/images/icon-check.svg"
                      width={24}
                      height={24}
                      alt="Check icon"
                      className="pt-2"
                    />
                    <p className="max-w-lg text-base text-justify leading-7 font-normal text-black-900">
                      <span className="font-bold">
                        Inteligência Artificial -
                      </span>{' '}
                      Desenvolvemos pesquisa base e geramos produtos de I.A em
                      conjunto com empresas e entidades.
                    </p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <Image
                      src="/images/icon-check.svg"
                      width={24}
                      height={24}
                      alt="Check icon"
                      className="pt-2"
                    />
                    <p className="max-w-lg text-base text-justify leading-7 font-normal text-black-900">
                      <span className="font-bold">Equipes Qualificadas -</span>{' '}
                      Treinamos alunos e temos uma base de colaboradores do
                      mercado para formação e gestão de times dentro dos
                      projetos.
                    </p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <Image
                      src="/images/icon-check.svg"
                      width={24}
                      height={24}
                      alt="Check icon"
                      className="pt-2"
                    />
                    <p className="max-w-lg text-base text-justify leading-7 font-normal text-black-900">
                      <span className="font-bold">Embrapii -</span> Somos
                      multiplicadores do modelo de projetos Embrapii com
                      contrapartida financeira não reembolsável com empresas,
                      através do nosso parceiro CEIA da UFG.
                    </p>
                  </li>
                </ul>
                <Link
                  href="https://linktr.ee/lamiautfpr"
                  target="_blank"
                  className="flex bg-primary-900 w-full md:w-3/4 h-[60px] rounded-lg font-bold text-white text-base justify-center items-center hover:scale-105 duration-300"
                >
                  Entre em contato conosco!
                </Link>
              </div>
              <Image
                src="/images/icon-novaLogo.png"
                width={508 * 0.75}
                height={491 * 0.75}
                alt="Logo LAMIA completo"
                className="max-md:hidden pr-8"
              />
            </div>
          </Section>

          <Section title="Nossos números" id="nossosNumeros">
            <div className="flex flex-col justify-center gap-7">
              <div className="flex max-md:flex-col justify-between max-md:justify-center border-b-2 border-b-primary-700 max-md:border-0">
                <div className="flex max-md:flex-col gap-6 max-md:gap-0 items-end max-md:items-start border-r-2 border-r-primary-700 pr-10 max-md:border-0">
                  <p className="text-secondary-900 font-extrabold text-8xl max-md:text-7xl mb-6 max-md:mb-2">
                    +7
                  </p>
                  <p className="text-primary-900 font-bold text-xl max-md:text-lg mb-6">
                    Projetos de PD&I executados com sucesso.
                  </p>
                </div>
                <div className="flex max-md:flex-col gap-6 max-md:gap-0 items-end max-md:items-start ml-10 max-md:ml-0">
                  <p className="text-secondary-900 font-extrabold text-8xl max-md:text-7xl mb-6 max-md:mb-2">
                    +10
                  </p>
                  <p className="text-primary-900 font-bold text-xl max-md:text-lg mb-6">
                    Propriedades Intelectuais geradas em parceria com o mercado.
                  </p>
                </div>
              </div>
              <div className="flex max-md:flex-col gap-6 w-full items-end max-md:items-start mb-6">
                <p className="text-secondary-900 font-extrabold">
                  <span className="text-7xl">+</span>
                  <span className="text-4xl max-md:text-2xl">R$</span>
                  <span className="text-8xl">6</span>
                  <span className="pl-5 text-6xl max-md:text-4xl max-md:pl-2">
                    MILHÕES
                  </span>
                </p>
                <p className="text-primary-900 font-bold text-3xl max-md:text-2xl">
                  em contratos de PD&I com empresas para desenvolvimento de
                  produtos de IA.
                </p>
              </div>
              <div className="flex max-md:flex-col gap-6 w-full items-end max-md:items-start">
                <p className="text-secondary-900 font-extrabold text-8xl">
                  +100
                </p>
                <p className="text-primary-900 font-bold text-3xl max-md:text-2xl">
                  alunos, doutores e profissionais do mercado de tecnologia.
                </p>
              </div>
            </div>
          </Section>

          <Section title="Depoimentos" id="Depoimentos">
            <div className="w-full flex flex-col lg:flex-row gap-6 items-center justify-center">
              <div className="w-sm max-w-[640px] md:min-w-[400px] flex-0 min-h-[18rem] h-[25rem] max-md:h-auto flex flex-col gap-5 items-center justify-between rounded-lg border-primary-900 border-x-2 bg-black-100 pt-8 px-4 pb-4 duration-300 hover:scale-105 max-sm:hover:scale-105">
                <div className="flex gap-2 star">
                  <BiSolidQuoteAltLeft
                    size={40}
                    className="shrink-0 text-secondary-900"
                  />
                  <p className="text-lg leading-7 font-normal text-black-900 text-justify">
                    Trabalhar com o LAMIA tem sido ótimo, estamos no 3º ano de
                    trabalho em conjunto. Os alunos possuem uma base de
                    conhecimento logo no início, o rápido aprendizado de
                    conteúdos novos foi algo que nos ajudou bastante nessa
                    parceria.
                  </p>
                </div>
                <div className="flex max-md:flex-col gap-2 justify-between items-center max-md:items-end w-full">
                  <div className="max-md:order-2  flex flex-1 gap-2 justify-start items-center w-full">
                    <Image
                      src="/images/Dep-GabrielHorikava.png"
                      width={80}
                      height={80}
                      alt="Imagem do Gabriel Horikava"
                      className="rounded-full"
                    />
                    <div className="flex flex-col gap-1 justify-center items-baseline">
                      <span className="text-lg font-bold leading-7 text-primary-900">
                        Gabriel Horikava
                      </span>
                      <span className="text-base leading-7 font-normal text-black-900">
                        Head de I.A na Cilia Tecnologia
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-sm w- max-w-[690px] md:min-w-[450px] flex-0 min-h-[18rem] max-md:h-auto flex flex-col gap-5 items-center justify-between rounded-lg border-primary-900 border-x-2 bg-black-100 pt-8 px-4 pb-4 duration-300 hover:scale-105 max-sm:hover:scale-105">
                <div className="flex gap-2 star">
                  <BiSolidQuoteAltLeft
                    size={40}
                    className="shrink-0 text-secondary-900"
                  />
                  <div>
                    <p className="text-lg leading-7 font-normal text-black-900 text-justify">
                      O LAMIA da UTFPR é um centro nacional de excelência em
                      pesquisa aplicada em IA. Para o AlfaCon trouxeram acesso a
                      pesquisadores especialistas uma área super demandada
                      mundialmente e impacto em nossos projetos de aplicar IA em
                      Educação.
                    </p>
                    <p className="text-lg leading-7 font-normal text-black-900 text-justify">
                      A Academia e Setor Produtivo operam com velocidades
                      diferentes, mas o LAMIA soube entender essa diferença e
                      leva muito a sério a visão de negócios como demandante da
                      ciência e pesquisa aplicada.
                    </p>
                  </div>
                </div>
                <div className="flex max-md:flex-col gap-2 justify-between items-center max-md:items-end w-full">
                  <div className="max-md:order-2  flex flex-1 gap-2 justify-start items-center w-full">
                    <Image
                      src="/images/Dep-JadsonSiqueira.png"
                      width={80}
                      height={80}
                      alt="Imagem do Jadson Siqueira"
                      className="rounded-full"
                    />
                    <div className="flex flex-col gap-1 justify-center items-baseline">
                      <span className="text-lg font-bold leading-7 text-primary-900">
                        Jadson Siqueira
                      </span>
                      <span className="text-base leading-7 font-normal text-black-900">
                        CTO & CMO da AlfaCon Concursos Públicos;
                        <br />
                        Presidente do SRI Iguassu Valley
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-sm max-w-[640px] md:min-w-[400px] flex-0 min-h-[18rem] h-[25rem] max-md:h-auto flex flex-col gap-5 items-center justify-between rounded-lg border-primary-900 border-x-2 bg-black-100 pt-8 px-4 pb-4 duration-300 hover:scale-105 max-sm:hover:scale-105">
                <div className="flex gap-2 star">
                  <BiSolidQuoteAltLeft
                    size={40}
                    className="shrink-0 text-secondary-900"
                  />
                  <p className="text-lg leading-7 font-normal text-black-900 text-justify">
                    Estou adorando trabalhar com o pessoal do LAMIA, eles tem um
                    formato prático e concreto de trabalho, o que é essencial
                    neste mundo de inovações tecnológicas.
                  </p>
                </div>
                <div className="flex max-md:flex-col gap-2 justify-between items-center max-md:items-end w-full">
                  <div className="max-md:order-2  flex flex-1 gap-2 justify-start items-center w-full">
                    <Image
                      src="/images/Dep-RamonOliveira.png"
                      width={80}
                      height={80}
                      alt="Imagem do Ramon Oliveira"
                      className="rounded-full"
                    />
                    <div className="flex flex-col gap-1 justify-center items-baseline">
                      <span className="text-lg font-bold leading-7 text-primary-900">
                        Ramon Oliveira
                      </span>
                      <span className="text-base leading-7 font-normal text-black-900">
                        CEO da Logito - Logística Inteligente
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="História e Missão" id="História e Missão">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <p className="max-w-lg text-base text-justify leading-7 font-normal text-black-900 order-2 md:order-1">
                <Link
                  href="https://docs.google.com/document/d/1JEfJ-gSrrJPPyxORf4BHEs8qLDszS1PTaV14I6ydx7s/edit?usp=sharing"
                  target="_blank"
                  className="text-secondary-900 font-bold"
                >
                  Fundado
                </Link>{' '}
                no final de 2019 pelo professor Dr. Thiago França Naves na UTFPR
                do campus Santa Helena, o LAMIA iniciou sua trajetória com a
                execução de{' '}
                <Link
                  href="https://github.com/lamiautfpr"
                  target="_blank"
                  className="text-secondary-900 font-bold"
                >
                  projetos
                </Link>{' '}
                utilizando Inteligência Artificial para construção de
                tecnologias e produtos para demandas de órgãos públicos e
                empresas. Nos anos seguintes, consolidou o perfil de atuação
                orientada a projetos de PD&I, com objetivo de gerar resultados
                de impacto nas organizações parceiras através de produtos de I.A
                construídos e validados em conjunto.
              </p>
              <Image
                src="/images/awards.svg"
                width={276}
                height={339}
                alt="Premio do LAMIA"
                className="order-1"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between my-8">
              <Image
                src="/images/icon-labs.svg"
                width={352}
                height={352}
                alt="Laboratório LAMIA"
              />
              <p className="max-w-lg text-base text-justify leading-7 font-normal text-black-900">
                A missão do LAMIA é{' '}
                <Link
                  href="https://www.linkedin.com/in/lamiautfpr/"
                  target="_blank"
                  className="text-secondary-900 font-bold"
                >
                  liderar
                </Link>{' '}
                o desenvolvimento de pesquisadores e profissionais em
                Inteligência Artificial que irão guiar o país na direção da
                inovação através da produção de conhecimento científico,
                soluções customizadas e produtos para a indústria brasileira e
                mundial. Estamos sempre a procura de novos talentos para
                ingressar em nosso modelo presencial ou remoto e{' '}
                <Link
                  href="https://forms.gle/yCAMx1eB2Q6ULJPK6"
                  target="_blank"
                  className="text-secondary-900 font-bold"
                >
                  trabalhar conosco
                </Link>
                , em projetos reais aplicados com empresas e entidades públicas
                parceiras, integrando as equipes de colaboradores dentro destes.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <p className="max-w-lg text-base leading-7 text-justify font-normal text-black-900 order-2 md:order-1">
                O{' '}
                <Link
                  href="https://www.instagram.com/lamiautfpr/"
                  target="_blank"
                  className="text-secondary-900 font-bold"
                >
                  LAMIA
                </Link>{' '}
                possui experiência na execução de projetos de PD&I em parceria
                com empresas e entidades públicas, para desenvolvimento de
                produtos de inteligência artificial que alavancam seus modelos
                de negócio através da automação de áreas e tarefas internas
                essenciais das mesmas. Somos parceiros do Centro de Excêlencia
                em I.A (
                <Link
                  href="https://ceia.ufg.br/"
                  target="_blank"
                  className="text-secondary-900 font-bold"
                >
                  CEIA
                </Link>
                ) credenciado como unidade{' '}
                <Link
                  href="https://embrapii.org.br/"
                  target="_blank"
                  className="text-secondary-900 font-bold"
                >
                  EMBRAPII
                </Link>
                , que permite que projetos de PD&I com empresas brasileiras
                possam ser construídos utilizando de contrapartidas financeiras
                não reembolsáveis da EMBRAPII e do{' '}
                <Link
                  href="https://sebrae.com.br/sites/PortalSebrae"
                  target="_blank"
                  className="text-secondary-900 font-bold"
                >
                  SEBRAE
                </Link>
                . Estamos sempre disponíveis a receber e discutir propostas de
                projetos em parceiria com empresas e entidades interessadas.
              </p>
              <Image
                src="/images/embrapii.png"
                width={500}
                height={250}
                alt="Premio do LAMIA"
                className="order-1"
              />
            </div>
          </Section>

          <Section
            title="Benefícios para empresas ao desenvolver projetos de PD&I com o LAMIA"
            id="Benefícios para empresas"
          >
            <div className="flex max-md:flex-col justify-between gap-6 items-center">
              <div className="flex flex-col flex-1 max-md:w-full">
                <h3 className="uppercase text-secondary-600 font-bold text-2xl mb-5 text-center">
                  COParticipação Financeira
                </h3>
                <div className="">
                  <div className="flex items-center">
                    <div className="h-[150px] w-[60px] flex items-center justify-center bg-primary-500">
                      <span className="text-white font-bold text-2xl border-l-2 border-b-2 border-black-300 p-[1px]">
                        1/3
                      </span>
                    </div>
                    <span className="font-bold text-2xl border-b-2 border-black-300 p-[1px] text-center min-w-[calc(80%-60px)] -mx-[10px]">
                      EMBRAPII
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-[300px] w-[60px] flex items-center justify-center bg-primary-900">
                      <span className="text-white font-bold text-2xl border-l-2 border-b-2 border-black-300 p-[1px] min-h-[196px]">
                        2/3
                      </span>
                    </div>
                    <span className="font-bold text-2xl border-b-2 border-black-300 p-[1px] text-center min-w-[calc(80%-60px)] -mx-[10px]">
                      Empresa e <br /> SEBRAE* <br />+ <br /> Unidade CEIA{' '}
                      <br />+<br />
                      LAMIA
                    </span>
                  </div>
                  <div className="font-medium text-xs mt-4">
                    <p>
                      <span className="font-extrabold">*</span>A contrapartida
                      financeira do SEBRAE está condicionada ao atendimento de
                      critérios específicos de faturamento e porte registrado no
                      CNPJ por parte da empresa.
                    </p>
                  </div>
                </div>
              </div>
              <ul className="h-full flex flex-col gap-5 max-w-lg mr-6">
                <li className="flex gap-4 items-start">
                  <Image
                    src="/images/icon-check.svg"
                    width={24}
                    height={24}
                    alt="Check icon"
                    className="pt-2"
                  />
                  <p className="max-w-lg text-base text-justify leading-7 font-normal text-black-900">
                    <span className="font-bold">Experiência comprovada:</span>{' '}
                    Conte com nossa experiência na execução bem-sucedida de mais
                    de 7 projetos de Pesquisa, Desenvolvimento e Inovação (PD&I)
                    em parceria com empresas de diversos setores.
                  </p>
                </li>
                <li className="flex gap-4 items-start">
                  <Image
                    src="/images/icon-check.svg"
                    width={24}
                    height={24}
                    alt="Check icon"
                    className="pt-2"
                  />
                  <p className="max-w-lg text-base text-justify leading-7 font-normal text-black-900">
                    <span className="font-bold">
                      Oportunidades para empresas:
                    </span>{' '}
                    Como parceiros do Centro de Excelência em Inteligência
                    Artificial (CEIA), uma unidade EMBRAPI, sua empresa poderá
                    contar com contrapartidas financeiras não reembolsáveis,
                    para impulsionar seus projetos de PD&I que irão resultar em
                    novos produtos de IA para seu negócio.
                  </p>
                </li>
                <li className="flex gap-4 items-start">
                  <Image
                    src="/images/icon-check.svg"
                    width={24}
                    height={24}
                    alt="Check icon"
                    className="pt-2"
                  />
                  <p className="max-w-lg text-base text-justify leading-7 font-normal text-black-900">
                    <span className="font-bold">
                      Acesso às últimas tecnologias:
                    </span>{' '}
                    Os colaboradores de sua empresa irão trabalhar lado a lado
                    com nossos pesquisadores e profissionais, desenvolvendo
                    novas habilidades e dominando as mais recentes tecnologias
                    de Inteligência Artificial, de forma customizada para o seu
                    produto e modelo de negócio.
                  </p>
                </li>
              </ul>
            </div>
          </Section>

          <Section title="Áreas de Atuação" id="areasAtuacao">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
              <div className="w-sm flex-0 h-[25rem] min-w-[400px] max-md:h-auto flex flex-col items-center justify-center rounded-lg bg-black-100 pt-8 px-4 pb-4 max-w-[640px] duration-300 hover:scale-105">
                <Image
                  src="/images/icon-data_science.svg"
                  width={60}
                  height={60}
                  alt="Data Science"
                />
                <h5 className="mt-6 mb-8 text-xl leading-8 font-bold text-primary-900">
                  Ciência de Dados
                </h5>
                <p className="text-base leading-7 font-normal text-black-900 text-center">
                  A ciência de dados é um campo interdisciplinar que usa
                  algoritmos, procedimentos e processos para examinar grandes
                  quantidades de dados a fim de descobrir padrões ocultos, gerar
                  insights e direcionar a tomada de decisões.
                </p>
              </div>
              <div className="w-sm flex-0 h-[30rem] max-md:h-auto flex flex-col items-center justify-center rounded-lg bg-black-100 pt-8 px-4 pb-4 max-w-[640px] duration-300 hover:scale-105">
                <Image
                  src="/images/icon-computer_vision.svg"
                  width={60}
                  height={60}
                  alt="Computer Vision"
                />
                <h5 className="mt-6 mb-11 text-xl leading-8 font-bold text-primary-900">
                  Aprendizado de Máquina
                </h5>
                <p className="text-base leading-7 font-normal text-black-900 text-center">
                  Aprendizado de Máquina permite que os computadores usem os
                  dados existentes para prever futuros comportamentos,
                  resultados e tendências, criando sistemas de IA que podem
                  identificar padrões e criar associações a partir da
                  experiência com os dados. É uma das maiores áreas dentro da
                  Inteligência Artificial.
                </p>
              </div>
              <div className="w-sm flex-0 h-[25rem] min-w-[400px] max-md:h-auto flex flex-col items-center justify-center rounded-lg bg-black-100 pt-8 px-4 pb-4 max-w-[640px] duration-300 hover:scale-105">
                <Image
                  src="/images/icon-educational_technologies.svg"
                  width={60}
                  height={60}
                  alt="Educational Technologiese"
                />
                <h5 className="mt-6 mb-8 text-xl leading-8 font-bold text-primary-900">
                  Tecnologias Imersivas
                </h5>
                <p className="text-base leading-7 font-normal text-black-900 text-center">
                  Tecnologias Imersivas são um campo onde são exploradas
                  soluções para simular ambientes reais dentro de um universo
                  virtual. O LAMIA utiliza tecnologias Web e Jogos Digitais para
                  criação de ferramentas que auxiliem nos processos de controle,
                  automação e treinamento dentro de indústrias e entidades
                  públicas.
                </p>
              </div>
            </div>
          </Section>

          <Section title="Orientadores" id="Orientadores">
            <div className="flex flex-col md:flex-row justify-center gap-6 ">
              <div className="flex flex-col w-80 drop-shadow-xl max-md:w-full">
                <Image
                  src="/images/avatar-thiago.png"
                  width={328}
                  height={192}
                  alt="Avatar Thiago"
                  className="mb-2 max-md:w-full"
                />
                <h5 className="mb-4 text-xl max-md:text-center leading-8 font-bold text-primary-900 ">
                  Thiago Naves
                </h5>
                <p className="mb-4 text-sm max-md:text-justify leading-5 font-normal text-black-700">
                  Coordenador do LAMIA e docente no curso de Ciência da
                  Computação da UTFPR Santa Helena. Conduz pesquisas nas áreas
                  de Ciência de Dados e Visão Computacional e trabalha junto a
                  incubadoras no desenvolvimento de empresas de base
                  tecnológicas e startups.
                </p>
              </div>
              <div className="flex flex-col w-80 drop-shadow-xl  max-md:w-full">
                <Image
                  src="/images/avatar-arlete.png"
                  width={328}
                  height={192}
                  alt="Avatar Arlete"
                  className="mb-2  max-md:w-full"
                />
                <h5 className="mb-4 text-xl max-md:text-center leading-8 font-bold text-primary-900">
                  Arlete Beuren
                </h5>
                <p className="mb-4 text-sm max-md:text-justify leading-5 font-normal text-black-700">
                  Orientadora do LAMIA e docente no Curso de Ciência da
                  Computação da UTFPR. Interesse de pesquisas nas áreas de Visão
                  Computacional/Processamento de Imagens/Reconhecimento de
                  Padrões/Big Data/Computação Gráfica/Realidade
                  Virtual/Desenvolvimento Web.
                </p>
              </div>
              <div className="flex flex-col w-80 drop-shadow-xl  max-md:w-full">
                <Image
                  src="/images/avatar-brilhador.png"
                  width={328}
                  height={192}
                  alt="Avatar Brilhador"
                  className="mb-2  max-md:w-full"
                />
                <h5 className="mb-4 text-xl max-md:text-center leading-8 font-bold text-primary-900">
                  Anderson Brilhador
                </h5>
                <p className="mb-4 text-sm max-md:text-justify leading-5 font-normal text-black-700">
                  Orientador do LAMIA e docente no curso de Ciência da
                  Computação da UTFPR Santa Helena. Desenvolve pesquisas nas
                  seguintes áreas: Computer Vision, Data Science, Data Mining,
                  Machine Learning e Deep Learning.
                </p>
              </div>
            </div>
          </Section>

          <Section
            title="Empresas parceiras"
            hasDivider={false}
            id="Empresas parceiras"
          >
            <div className="flex gap-4 flex-wrap items-center justify-center max-sm:justify-center">
              {partners.map((partner) => (
                <Image
                  className="max-sm:max-w-[7rem] hover:scale-110 duration-300 mx-2"
                  key={partner.path}
                  src={`/images/partners/${partner.path}`}
                  width={partner.width}
                  height={partner.height}
                  alt={partner.alt}
                />
              ))}
            </div>
            <div className="flex max-md:flex-col justify-between items-center mt-5 max-md:mt-20">
              <div className="flex flex-col flex-1 md:min-w-[500px] max-md:w-full ">
                <p className="uppercase text-secondary-900 font-bold text-xl mb-5 text-justify">
                  Este é o momento perfeito para se juntar a nós!
                </p>
                <p className="text-base leading-7 font-normal text-black-900 text-justify">
                  Entre em contato conosco para explorar as possibilidades de
                  I.A e discutir como podemos colaborar para impulsionar sua
                  carreira como pesquisador/colaborador ou como podemos
                  alavancar o sucesso da sua empresa/entidade pública por meio
                  de produtos de I.A. Juntos, vamos moldar o futuro da inovação
                  no Brasil.
                </p>
              </div>
              <div className="flex justify-center w-full max-md:mt-10">
                <Link
                  href="https://linktr.ee/lamiautfpr"
                  target="_blank"
                  className="flex bg-primary-900 w-[466px] h-[60px] rounded-lg font-bold text-white text-base justify-center items-center hover:scale-105 duration-300"
                >
                  Entre em contato conosco!
                </Link>
              </div>
            </div>
          </Section>
        </main>
      </div>

      <footer className="mt-10 w-full flex items-center justify-center py-12 bg-black-100">
        <div className="flex gap-10 flex-col w-full max-w-6xl px-1">
          <div className="flex max-md:flex-col max-md:items-start gap-10 justify-between">
            <div className="max-md:flex max-md:justify-center max-md:px-6 max-md:w-full">
              <Image
                src="/images/icon-logo_name.svg"
                width={217}
                height={94}
                alt="Logo LAMIA"
              />
            </div>
            <div className="flex flex-col max-md:px-6 gap-4 md:max-w-[15rem] justify-start items-start">
              <div className="text-xl leading-8 font-bold text-black-900">
                Contato
                <div className="flex gap-2 items-start mt-4">
                  <Image
                    src="/images/icon-location.svg"
                    width={24}
                    height={24}
                    alt="Location icon"
                  />
                  <Link
                    href="https://maps.app.goo.gl/9LXeXigLikrYpQ3r6"
                    className="text-sm leading-6 font-normal text-black-900"
                    target="_blank"
                  >
                    UTFPR Santa Helena <br />
                    Bloco L - LAMIA <br />
                    Santa Helena - PR <br />
                    85892-000
                  </Link>
                </div>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/images/icon-email.svg"
                  width={24}
                  height={24}
                  alt="E-mail icon"
                />
                <Link
                  href="mail:lamia-sh@utfpr.edu.br"
                  className="text-sm leading-6 font-normal text-black-900"
                  target="_blank"
                >
                  lamia-sh@utfpr.edu.br
                </Link>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/images/icon-telephone.svg"
                  width={24}
                  height={24}
                  alt="Telefone icon"
                />
                <Link
                  href="tel:45998357976"
                  className="text-sm leading-6 font-normal text-black-900"
                >
                  (45) 99826-9880
                </Link>
              </div>
            </div>

            <div className="flex flex-col max-md:px-6 max-md:w-full gap-4 md:max-w-[15rem] justify-start items-start">
              <h6 className="text-xl leading-8 font-bold text-black-900">
                Navegação
              </h6>
              <a
                href="#EntreEmContato"
                className="text-sm leading-6 font-normal text-black-900"
              >
                Benefícios para as empresas
              </a>
              <a
                href="#nossosNumeros"
                className="text-sm leading-6 font-normal text-black-900"
              >
                Nossos números
              </a>
              <a
                href="#Depoimentos"
                className="text-sm leading-6 font-normal text-black-900"
              >
                Depoimentos
              </a>
              <a
                href="#História e Missão"
                className="text-sm leading-6 font-normal text-black-900"
              >
                História e Missão
              </a>
              <a
                href="#Benefícios para empresas"
                className="text-sm leading-6 font-normal text-black-900"
              >
                Modelo EMBRAPII
              </a>
              <a
                href="#areasAtuacao"
                className="text-sm leading-6 font-normal text-black-900"
              >
                Áreas de Atuação
              </a>
              <a
                href="#Orientadores"
                className="text-sm leading-6 font-normal text-black-900"
              >
                Orientadores
              </a>
              <a
                href="#Empresas parceiras"
                className="text-sm leading-6 font-normal text-black-900"
              >
                Empresas parceiras
              </a>
            </div>
            <div className="flex flex-col max-md:px-6 max-md:w-full gap-4 md:max-w-[15rem]">
              <h6 className="text-xl leading-8 font-bold text-black-900">
                Social
              </h6>
              <div className="flex gap-5">
                <Link
                  href="https://www.facebook.com/lamiautfpr2"
                  target="_blank"
                  className="hover:scale-150 duration-300 scale-125"
                >
                  <Image
                    src="/images/icon-facebook.svg"
                    width={24}
                    height={24}
                    alt="Facebook icon"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/lamiautfpr/"
                  target="_blank"
                  className="hover:scale-150 duration-300 scale-125"
                >
                  <Image
                    src="/images/icon-instagram.svg"
                    width={24}
                    height={24}
                    alt="Instagram icon"
                  />
                </Link>
                <Link
                  href="https://github.com/lamiautfpr"
                  target="_blank"
                  className="hover:scale-150 duration-300 scale-125"
                >
                  <Image
                    src="/images/icon-github.svg"
                    width={24}
                    height={24}
                    alt="Github icon"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/lamiautfpr/"
                  target="_blank"
                  className="hover:scale-150 duration-300 scale-125"
                >
                  <Image
                    src="/images/icon-linkedin.svg"
                    width={24}
                    height={24}
                    alt="Linkedin icon"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t py-4">
            <span className="flex items-center justify-center text-base leading-7 font-normal text-black-900">
              © 2024 LAMIA. Todos os direitos reservados
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;

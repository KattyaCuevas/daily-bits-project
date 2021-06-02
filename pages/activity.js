import Head from "next/head";
import Footer from "../components/footer";
import ClockIcon from "../icons/clock";
import MessageCircleIcon from "../icons/message-circle";

const userActivity = {
  studyTime: 1,
  answeredQuestions: 40,
  correctAnswers: 20,
  wrongAnswers: 20,
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-base">
      <Head>
        <title>Daily Bits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 px-20 bg-gray-900 text-white pt-12">
        <h1 className="mb-8 text-2xl">Estadísticas</h1>
        <span className="mb-6">Los últimos 7 días</span>
        <div className="w-full">
          <div className="border-2 rounded-md px-4 py-2 flex justify-between mb-3">
            <div className="flex">
              <ClockIcon color="#FFFFFE" />
              <span className="pl-2">Tiempo de estudio (horas)</span>
            </div>
            <span>{userActivity.studyTime}</span>
          </div>
          <div className="border-2 rounded-md px-4 py-2 flex justify-between mb-3">
            <div className="flex">
              <MessageCircleIcon color="#FFFFFE" />
              <span className="pl-2">Respuestas contestadas</span>
            </div>
            <span>{userActivity.answeredQuestions}</span>
          </div>
          <div className="border-2 rounded-md px-4 py-2 flex justify-between mb-3">
            <div className="flex">
              <MessageCircleIcon color="#FFFFFE" />
              <span className="pl-2">Respuestas correctas</span>
            </div>
            <span className="text-green-500">
              {userActivity.correctAnswers}
            </span>
          </div>
          <div className="border-2 rounded-md px-4 py-2 flex justify-between mb-3">
            <div className="flex">
              <MessageCircleIcon color="#FFFFFE" />
              <span className="pl-2">Respuestas incorrectas</span>
            </div>
            <span className="text-red-500">{userActivity.wrongAnswers}</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

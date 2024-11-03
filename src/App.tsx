import React from 'react';
import { Instagram, MessageCircle, Droplets, Calendar, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-xl">
          <div className="flex items-center justify-center gap-4">
            <Droplets className="w-12 h-12 text-blue-500 animate-bounce" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Gotas Vivas
            </h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="grid gap-8 md:grid-cols-2">
          {/* Welcome Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">Bem-vindos!</h2>
            <p className="text-lg text-gray-700">
            O Ministério Infantil Gotas Vivas é dedicado a ensinar a Palavra de Deus de forma profissional e inspiradora, proporcionando uma experiência significativa para as crianças. Com uma equipe de mais de 30 professores altamente treinados, estamos preparados para acolher e ensinar os filhos dos membros e visitantes, transmitindo valores cristãos e ajudando-os a crescer na fé de maneira divertida e educativa. Venha se divertir e aprender a palavra de Deus com a gente! Um lugar especial cheio de aventuras e descobertas incríveis.
            </p>
          </div>

          {/* Schedule Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-bold text-purple-600">Horários</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span className="text-lg">Domingo - 08:45h (EBD)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span className="text-lg">Quarta - 19:30h (EBQ)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                <span className="text-lg">Quinta - 19:30h (EBQ)</span>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="md:col-span-2 grid gap-4 md:grid-cols-2">
            <a
              href="https://www.instagram.com/gotasvivasmed/"
              className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 shadow-xl flex items-center justify-center gap-4 transform hover:scale-105 transition-transform"
            >
              <Instagram className="w-8 h-8 text-white" />
              <span className="text-xl font-bold text-white">Siga no Instagram</span>
            </a>
            <a
              href="https://chat.whatsapp.com/HPMWP0LYo9888i5tFei6WO"
              className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 shadow-xl flex items-center justify-center gap-4 transform hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-8 h-8 text-white" />
              <span className="text-xl font-bold text-white">Grupo do WhatsApp</span>
            </a>
          </div>

          {/* Location Section */}
          <div className="md:col-span-2 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-bold text-purple-600">Localização</h2>
            </div>
            <p className="text-lg text-gray-700">
              Igreja Assembleia de Deus Sede Situada na Rua Paraguai N.1165 - Centro de Medianeira. Venha nos visitar! Estamos esperando por você com muita alegria e diversão.
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-8 text-center text-white">
          <p className="text-lg">© 2024 Gotas Vivas - Todos os direitos reservados</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
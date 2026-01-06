"use client";

import Link from "next/link";

export default function ProposalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <span className="text-[#C41E3A] text-sm font-medium tracking-[0.2em] uppercase">
              KALIA
            </span>
            <span className="text-gray-400 text-sm ml-2">para Mundo Arjona</span>
          </div>
          <Link 
            href="#inversion" 
            className="text-sm text-gray-500 hover:text-[#C41E3A] transition-colors"
          >
            ← Volver
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="font-serif text-5xl md:text-6xl text-gray-300 leading-tight mb-8">
            Implementación de Chat con IA
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-6">
            Kalia se integra a los canales digitales de Mundo Arjona con el objetivo de 
            aumentar la conversión en la venta de paquetes para los shows de Ricardo Arjona.
          </p>
          
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
            Atención inmediata y clara a usuarios interesados en asistir a los conciertos. 
            Guía personalizada hasta la compra del paquete más adecuado según sus necesidades.
          </p>

          <div className="inline-flex items-center gap-2 text-sm border border-gray-200 rounded-full px-4 py-2">
            <span className="text-gray-500">Implementación:</span>
            <span className="text-[#C41E3A] font-medium">3 semanas</span>
          </div>
        </section>

        {/* Objetivos */}
        <section className="mb-24">
          <h2 className="text-2xl text-gray-400 mb-8 border-b border-gray-100 pb-4">
            Objetivo General
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-1 bg-[#C41E3A]/20 rounded-full"></div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Aumentar conversión de ventas</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Incrementar las ventas de paquetes VIP mediante atención inmediata 24/7 
                  y guía personalizada en el proceso de compra.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-1 bg-[#C41E3A]/20 rounded-full"></div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Atención comercial + asistencial</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  El chat combina información, persuasión y acompañamiento durante todo 
                  el proceso de compra con un tono cercano como hablándole a otro fan.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-1 bg-[#C41E3A]/20 rounded-full"></div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Reducir carga operativa</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Automatizar consultas frecuentes liberando al equipo comercial para 
                  enfocarse en casos complejos y cierre de ventas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Funcionalidades del Chat */}
        <section className="mb-24">
          <h2 className="text-2xl text-gray-400 mb-8 border-b border-gray-100 pb-4">
            Capacidades del Asistente "Mundo"
          </h2>

          {/* Atención de consultas */}
          <div className="mb-12">
            <div className="flex items-baseline gap-3 mb-4">
              <h3 className="font-medium text-gray-900">Atención de consultas generales</h3>
              <span className="text-xs text-gray-400 uppercase tracking-wide">24/7</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-500 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-[#C41E3A] mt-1">·</span>
                Tipos de paquetes disponibles y qué incluye cada uno
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C41E3A] mt-1">·</span>
                Diferencias entre paquetes (VIP Lounge, Hospitality, Zona Premium)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C41E3A] mt-1">·</span>
                Fechas, ciudades y shows disponibles del tour
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C41E3A] mt-1">·</span>
                Condiciones de compra, accesos y beneficios
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C41E3A] mt-1">·</span>
                Requisitos para asistir (entradas, acreditaciones, horarios)
              </li>
            </ul>
          </div>

          {/* Funcionalidad comercial */}
          <div className="mb-12">
            <div className="flex items-baseline gap-3 mb-4">
              <h3 className="font-medium text-gray-900">Mensajes de venta y persuasión</h3>
              <span className="text-xs text-gray-400 uppercase tracking-wide">Conversión</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-500 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-[#C41E3A] mt-1">·</span>
                Resaltar beneficios emocionales: experiencia única, cercanía con Ricardo
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C41E3A] mt-1">·</span>
                Crear sensación de urgencia cuando aplique (cupos limitados)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C41E3A] mt-1">·</span>
                "Esta es una oportunidad única para vivir a Arjona desde un lugar privilegiado"
              </li>
            </ul>
          </div>

          {/* Recomendación personalizada */}
          <div className="mb-12">
            <div className="flex items-baseline gap-3 mb-4">
              <h3 className="font-medium text-gray-900">Recomendación personalizada</h3>
              <span className="text-xs text-gray-400 uppercase tracking-wide">IA</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-500 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-[#C41E3A] mt-1">·</span>
                Detectar necesidades con preguntas simples: ciudad, tipo de experiencia
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C41E3A] mt-1">·</span>
                Recomendar el paquete más adecuado explicando por qué es ideal
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C41E3A] mt-1">·</span>
                Comparar opciones cuando sea necesario para facilitar la decisión
              </li>
            </ul>
          </div>

          {/* Guía de compra */}
          <div className="mb-12">
            <div className="flex items-baseline gap-3 mb-4">
              <h3 className="font-medium text-gray-900">Guía en el proceso de compra</h3>
              <span className="text-xs text-gray-400 uppercase tracking-wide">Funnel</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-500 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-[#C41E3A] mt-1">·</span>
                Indicar cómo acceder al paquete seleccionado
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C41E3A] mt-1">·</span>
                Explicar el proceso de compra de forma simple
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C41E3A] mt-1">·</span>
                Redirigir al link de paquetes.mundoarjona.com cuando corresponda
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C41E3A] mt-1">·</span>
                Resolver objeciones frecuentes (precio, disponibilidad, qué incluye)
              </li>
            </ul>
          </div>

          {/* Escalamiento */}
          <div>
            <div className="flex items-baseline gap-3 mb-4">
              <h3 className="font-medium text-gray-900">Escalamiento a equipo humano</h3>
              <span className="text-xs text-gray-400 uppercase tracking-wide">Soporte</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-500 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-[#C41E3A] mt-1">·</span>
                Consultas muy específicas o fuera del alcance
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C41E3A] mt-1">·</span>
                Inconvenientes técnicos o situaciones sensibles
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C41E3A] mt-1">·</span>
                Identificación automática y derivación al equipo comercial
              </li>
            </ul>
          </div>
        </section>

        {/* Alcance del Proyecto */}
        <section className="mb-24">
          <h2 className="text-2xl text-gray-400 mb-8 border-b border-gray-100 pb-4">
            Alcance del Proyecto
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Incluido */}
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Incluido en el desarrollo</h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>· Asistente de IA "Mundo" configurado y entrenado</li>
                <li>· Integración con WhatsApp Business API</li>
                <li>· Base de conocimiento con todos los paquetes del tour</li>
                <li>· Panel de seguimiento de conversaciones</li>
                <li>· Métricas de conversión y engagement</li>
                <li>· Escalamiento automático a equipo humano</li>
                <li>· Capacitación al equipo (hasta 4 horas)</li>
                <li>· Documentación de uso</li>
                <li>· Soporte técnico durante implementación</li>
                <li>· 30 días de garantía post-lanzamiento</li>
              </ul>
            </div>

            {/* No incluido */}
            <div>
              <h3 className="font-medium text-gray-900 mb-4">No incluido</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>· Hardware (celulares, tablets)</li>
                <li>· Costos de WhatsApp Business API (Meta cobra por conversación)</li>
                <li>· Integración con sistemas de pago o ticketing</li>
                <li>· Desarrollo de apps móviles nativas</li>
                <li>· Diseño de marca o material gráfico</li>
                <li>· Modificaciones post-firma del contrato</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cronograma */}
        <section className="mb-24">
          <h2 className="text-2xl text-gray-400 mb-8 border-b border-gray-100 pb-4">
            Cronograma de Implementación
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="text-2xl font-serif text-gray-300 w-8">1</div>
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="font-medium text-gray-900">Kick-off y Configuración</h3>
                  <span className="text-xs text-[#C41E3A]">3 días</span>
                </div>
                <p className="text-sm text-gray-500">
                  Relevamiento de paquetes, ciudades, precios y FAQs. 
                  Definición del tono y personalidad del asistente.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-2xl font-serif text-gray-300 w-8">2</div>
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="font-medium text-gray-900">Desarrollo del Asistente</h3>
                  <span className="text-xs text-[#C41E3A]">1 semana</span>
                </div>
                <p className="text-sm text-gray-500">
                  Configuración de IA, entrenamiento con base de conocimiento, 
                  flujos de conversación y lógica de recomendación.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-2xl font-serif text-gray-300 w-8">3</div>
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="font-medium text-gray-900">Integración WhatsApp</h3>
                  <span className="text-xs text-[#C41E3A]">3 días</span>
                </div>
                <p className="text-sm text-gray-500">
                  Conexión con WhatsApp Business API, configuración de número 
                  y pruebas de envío/recepción de mensajes.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-2xl font-serif text-gray-300 w-8">4</div>
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="font-medium text-gray-900">Testing y Capacitación</h3>
                  <span className="text-xs text-[#C41E3A]">4 días</span>
                </div>
                <p className="text-sm text-gray-500">
                  Pruebas internas, ajustes finos, capacitación al equipo 
                  y documentación de uso.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-2xl font-serif text-gray-300 w-8">5</div>
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="font-medium text-gray-900">Go-Live y Soporte</h3>
                  <span className="text-xs text-[#C41E3A]">Continuo</span>
                </div>
                <p className="text-sm text-gray-500">
                  Puesta en producción, monitoreo inicial intensivo y 
                  ajustes según feedback de usuarios reales.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-400">
              Tiempo total estimado: <span className="text-gray-900 font-medium">3 semanas</span>
              <span className="ml-4 text-xs">
                Sujeto a cumplimiento de tiempos de feedback del cliente (máx. 48hs hábiles).
              </span>
            </p>
          </div>
        </section>

        {/* Inversión */}
        <section id="inversion" className="mb-24">
          <h2 className="text-2xl text-gray-400 mb-8 border-b border-gray-100 pb-4">
            Inversión
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Setup */}
            <div className="border border-gray-100 rounded-lg p-6">
              <h3 className="font-medium text-gray-900 mb-6">Setup e Implementación</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Configuración del asistente "Mundo"</span>
                  <span className="text-gray-400">Incluido</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Integración WhatsApp Business</span>
                  <span className="text-gray-400">Incluido</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Base de conocimiento + entrenamiento</span>
                  <span className="text-gray-400">Incluido</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Panel de métricas</span>
                  <span className="text-gray-400">Incluido</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Capacitación (4hs)</span>
                  <span className="text-gray-400">Incluido</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-900 font-medium">Total Setup</span>
                  <span className="text-2xl font-medium text-gray-900">$2,500 USD</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">Pago único</p>
              </div>
            </div>

            {/* Mensual */}
            <div className="border border-gray-100 rounded-lg p-6">
              <h3 className="font-medium text-gray-900 mb-6">Operación Mensual</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Plataforma Kalia</span>
                  <span className="text-gray-400">Incluido</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">1,000 conversaciones AI/mes</span>
                  <span className="text-gray-400">Incluido</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Hosting y backups</span>
                  <span className="text-gray-400">Incluido</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Actualizaciones y mejoras</span>
                  <span className="text-gray-400">Incluido</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Soporte técnico L-V 9-18hs</span>
                  <span className="text-gray-400">Incluido</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-900 font-medium">Total Mensual</span>
                  <span className="text-2xl font-medium text-gray-900">$350 USD</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Conversaciones excedentes: $0.15 USD c/u
                </p>
              </div>
            </div>
          </div>

          {/* Forma de pago */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-4">Forma de pago</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-400">50% - Firma del contrato</span>
                <p className="text-gray-900 font-medium">$1,250 USD</p>
              </div>
              <div>
                <span className="text-gray-400">50% - Go-Live</span>
                <p className="text-gray-900 font-medium">$1,250 USD</p>
              </div>
              <div>
                <span className="text-gray-400">Mensual desde go-live</span>
                <p className="text-gray-900 font-medium">$350 USD/mes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resumen */}
        <section className="mb-24">
          <h2 className="text-2xl text-gray-400 mb-8 border-b border-gray-100 pb-4">
            Resumen de Inversión
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center text-center">
            <div>
              <p className="text-4xl font-medium text-gray-900">$2,500</p>
              <p className="text-sm text-gray-400 mt-1">Setup único</p>
            </div>
            <div className="text-3xl text-gray-300">+</div>
            <div>
              <p className="text-4xl font-medium text-gray-900">$350<span className="text-lg text-gray-400">/mes</span></p>
              <p className="text-sm text-gray-400 mt-1">Operación (1,000 conv. incluidas)</p>
            </div>
          </div>
        </section>

        {/* Perfil de usuario */}
        <section className="mb-24">
          <h2 className="text-2xl text-gray-400 mb-8 border-b border-gray-100 pb-4">
            Perfil del Usuario Objetivo
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <div className="w-1 bg-[#C41E3A]/20 rounded-full"></div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Fans de Ricardo Arjona</h3>
                <p className="text-sm text-gray-500">
                  Usuarios apasionados que buscan vivir experiencias únicas con el artista.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-1 bg-[#C41E3A]/20 rounded-full"></div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Buscadores de experiencias VIP</h3>
                <p className="text-sm text-gray-500">
                  Interesados en paquetes premium con beneficios exclusivos.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-1 bg-[#C41E3A]/20 rounded-full"></div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Usuarios que investigan antes de comprar</h3>
                <p className="text-sm text-gray-500">
                  Necesitan información clara y comparativas para decidir.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-1 bg-[#C41E3A]/20 rounded-full"></div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Usuarios indecisos</h3>
                <p className="text-sm text-gray-500">
                  Requieren acompañamiento y estímulos comerciales para cerrar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados esperados */}
        <section className="mb-24">
          <h2 className="text-2xl text-gray-400 mb-8 border-b border-gray-100 pb-4">
            Resultados Esperados
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-serif text-[#C41E3A] mb-2">↑</p>
              <p className="text-sm text-gray-900 font-medium">Conversión de ventas</p>
              <p className="text-xs text-gray-400 mt-1">Más paquetes vendidos</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-[#C41E3A] mb-2">24/7</p>
              <p className="text-sm text-gray-900 font-medium">Atención continua</p>
              <p className="text-xs text-gray-400 mt-1">Sin perder oportunidades</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-[#C41E3A] mb-2">↓</p>
              <p className="text-sm text-gray-900 font-medium">Carga operativa</p>
              <p className="text-xs text-gray-400 mt-1">Equipo enfocado en ventas</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-[#C41E3A] mb-2">★</p>
              <p className="text-sm text-gray-900 font-medium">Experiencia mejorada</p>
              <p className="text-xs text-gray-400 mt-1">Fans satisfechos</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-400 mb-2">
            Propuesta válida por 30 días · Precios en USD · IVA no incluido
          </p>
          <p className="text-xs text-gray-300">
            Kalia — Asistentes de IA para WhatsApp
          </p>
        </footer>
      </main>
    </div>
  );
}

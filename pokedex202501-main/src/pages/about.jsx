const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <section className="bg-green-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Erick Zavala</h1>
                    <p className="text-xl font-light mb-6">
                        Ingeniero de Software | Especialista en Soluciones Tecnológicas
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="#contact"
                            className="bg-white text-green-600 px-6 py-2 rounded-full font-medium shadow-sm hover:bg-gray-100 transition"
                        >
                            Contacto
                        </a>
                        <a
                            href="#projects"
                            className="border border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-green-600 transition"
                        >
                            Proyectos
                        </a>
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-12 px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-center">Sobre Mí</h2>
                    <p className="text-lg mb-6">
                        Ingeniero de software con 5 años de experiencia desarrollando soluciones escalables. 
                        Especializado en backend y sistemas distribuidos, con pasión por crear tecnología que resuelva 
                        problemas reales.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {['Python', 'Java', 'SQL',].map((skill) => (
                            <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Experiencia</h2>
                    <div className="max-w-2xl mx-auto space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold">TechSolutions Inc. - Ingeniero Senior</h3>
                            <p className="text-gray-600 mb-2">2020 - Presente</p>
                            <p className="text-gray-700">
                                Desarrollo de sistemas distribuidos y APIs de alto rendimiento. Liderazgo técnico en proyectos clave.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">DataMind - Desarrollador Backend</h3>
                            <p className="text-gray-600 mb-2">2018 - 2020</p>
                            <p className="text-gray-700">
                                Implementación de microservicios y optimización de bases de datos para mejorar el rendimiento.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="container mx-auto py-12 px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Sistema de Análisis en Tiempo Real</h3>
                        <p className="text-gray-700 mb-4">
                            Plataforma para procesamiento de datos en tiempo real con capacidad para manejar millones de eventos diarios.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['C#',].map(tech => (
                                <span key={tech} className="bg-white text-gray-800 px-2 py-1 rounded text-xs">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">API de Recomendaciones</h3>
                        <p className="text-gray-700 mb-4">
                            Servicio de recomendaciones personalizadas con algoritmos de machine learning.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['Node.js','MongoDB'].map(tech => (
                                <span key={tech} className="bg-white text-gray-800 px-2 py-1 rounded text-xs">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
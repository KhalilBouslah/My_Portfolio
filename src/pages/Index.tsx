
import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, BarChart3, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const projects = [
    {
      title: "Job-Scraper",
      description: "This project is a powerful automation tool that scrapes job listings from Indeed, stores them in Google Sheets, and generates personalized AI cover letters using the Meta LLaMA 3 model via the OpenRouter API. It also includes a Streamlit web app to launch everything with a single click.",
      techStack: ["Python", "Web Scraping", "Google Sheets API", "LLaMA 3", "OpenRouter API", "Streamlit", "AI/ML"],
      githubUrl: "https://github.com/KhalilBouslah/Job-Scraper",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "CryptoStream",
      description: "A real-time data engineering pipeline that ingests Bitcoin price data from the Yahoo Finance API using Kafka, processes it with Apache Spark, stores it in a PostgreSQL database, and visualizes the data using Matplotlib. This project showcases end-to-end data pipeline orchestration with Apache Airflow.",
      techStack: ["Apache Kafka", "Apache Spark", "PostgreSQL", "Apache Airflow", "Yahoo Finance API", "Matplotlib", "Python"],
      githubUrl: "https://github.com/KhalilBouslah/Crypto_Stream",
      icon: <BarChart3 className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "SentimentScraperPipeline",
      description: "An end-to-end ETL pipeline designed to collect user reviews, analyze sentiments with an NLTK model, and store the results in a database, all orchestrated with Apache Airflow.",
      techStack: ["Python", "NLTK", "Apache Airflow", "ETL", "Sentiment Analysis", "Web Scraping", "Database"],
      githubUrl: "https://github.com/KhalilBouslah/SentimentScraperPipeline",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Tunisia Weather Stream",
      description: "This project demonstrates a real-time weather data pipeline using the OpenWeather API, Kafka, Apache Spark, Cassandra, and Grafana. The pipeline collects random weather data from Tunisian states, processes it in real-time, stores it in Cassandra, and visualizes it using Grafana.",
      techStack: ["OpenWeather API", "Apache Kafka", "Apache Spark", "Cassandra", "Grafana", "Real-time Processing", "Data Visualization"],
      githubUrl: "https://github.com/KhalilBouslah/Tunisia_weather_streaming_pipeline",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Med Khalil Bouslah
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Data Engineer & Developer specializing in real-time data pipelines, web scraping automation, and NLP solutions
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <a href="mailto:khalilbouslah@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" asChild className="hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                <a href="https://www.linkedin.com/in/med-khalil-bouslah-966059227" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
          
          {/* Skills highlight */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <Database className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Real-time Data Pipelines</h3>
              <p className="text-gray-600 text-sm">Apache Kafka, Spark, Airflow orchestration</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <Code className="w-8 h-8 text-green-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Web Scraping & Automation</h3>
              <p className="text-gray-600 text-sm">Python automation, API integration, data extraction</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <Brain className="w-8 h-8 text-purple-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">NLP & AI Integration</h3>
              <p className="text-gray-600 text-sm">NLTK sentiment analysis, LLaMA 3 implementation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing expertise in data engineering, automation, and real-time processing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black transition-all duration-300 group-hover:scale-105">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Github className="w-4 h-4" />
                      View on GitHub
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Open to opportunities in data engineering, automation, and innovative tech solutions
          </p>
          
          <div className="flex flex-row justify-center gap-6">
            <Button size="lg" asChild className="bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              <a href="mailto:khalilbouslah@gmail.com" className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                khalilbouslah@gmail.com
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              <a href="https://www.linkedin.com/in/med-khalil-bouslah-966059227" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
            © 2024 Med Khalil Bouslah.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

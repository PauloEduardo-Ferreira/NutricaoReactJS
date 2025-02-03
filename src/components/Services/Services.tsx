import React from 'react';
import './services.css';

const Services = () => {
    return (
        <section id="services" className='services'>
            <h1>Serviços</h1>
            <ul>
                <li><h3>Consultoria Nutricional</h3></li>
                <p>Avaliação detalhada do seu histórico
                    alimentar, hábitos de vida e objetivos para
                    desenvolver um plano nutricional adequado
                    às suas necessidades individuais.</p>

                <li><h3>Planejamento Alimentar Personalizado</h3></li>
                <p>Elaboração de cardápios específicos para
                    suas metas, considerando suas preferências
                    alimentares, rotina e restrições. O
                    planejamento é flexível e adaptado ao seu
                    dia a dia.</p>

                <li><h3>Acompanhamento Personalizado</h3></li>
                <p>Suporte contínuo para monitorar sua
                    evolução, ajustar o plano alimentar e garantir
                    que você se mantenha motivado(a) ao longo
                    da jornada.</p>

                <li><h3>Reeducação Alimentar</h3></li>
                <p>Estratégias para criar hábitos saudáveis e sustentáveis, ensinando como fazer melhores escolhas alimentares sem abrir mão do prazer de comer. Ideal para quem busca mudanças a longo prazo sem dietas radicais.</p>

                <li><h3>Nutrição Esportiva</h3></li>
                <p>Orientação nutricional específica para atletas e praticantes de atividade física, ajudando na melhora do desempenho, recuperação muscular e otimização dos resultados.</p>
            </ul>
        </section>
    );
}

export default Services;
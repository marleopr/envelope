import React from 'react';
import $ from 'jquery';
import './style.css';

const Envelope1 = () => {
    React.useEffect(() => {
        $('.thanks,.send_me').hide();

        $('.contact_me').on('click', function () {
            $('.contact').animate({ marginTop: '80px' }, 300);
            $('.top_flap').removeClass('close_sesame');
            $('.contact_form').delay(500).queue(function () { $('.contact_form').addClass('open_form').dequeue(); });
            $(this).fadeOut(300);
            $('.send_me').fadeIn(300);

        });

        $('.reset,.send_me').on('click', function () {
            $('.contact').delay(800).animate({ marginTop: '0px' }, 300);
            $('.top_flap').delay(800).queue(function () { $(this).addClass('close_sesame').dequeue(); });
            $('.contact_form').removeClass('open_form');
            $('.send_me').fadeOut(300);
            $('.contact_me').fadeIn(300);
        });

        return () => {
            // Limpar eventos ao desmontar o componente
            $('.contact_me, .reset, .send_me').off('click');
        };
    }, []); // Executar apenas uma vez ao montar o componente

    return (
        <div className="envelope">
            <div className="contact_form">
                <span className="reset">x</span>
                <div className="convite">
                    <h1>Nome do Casal</h1>
                    <div>Juntamente com seus pais:</div>
                    <div className="pais">
                        <div>Nome dos pais da Noiva</div>
                        <div>Nome dos pais do Noivo</div>
                    </div>
                    <div>Convidam para o casamento:</div>
                    <h4>12 de junho de 2024, às 19hs</h4>
                    <h5>Local do Casamento</h5>
                    <a href="https://wa.me/seunumerodetelefone?text=SuaMensagemAqui" target="_blank" rel="noreferrer">
                        <button>Confirmar Presença</button>
                    </a>
                </div>
            </div>
            <p className="contact_me">ABRIR</p>
            <p className="send_me">FECHAR</p>
            {/* <p className="thanks">THANKS</p> */}
            <span className="top_flap close_sesame"></span>
            <span className="side_flaps"></span>
            <span className="bottom_flap"></span>
        </div>
    );
};

export default Envelope1;

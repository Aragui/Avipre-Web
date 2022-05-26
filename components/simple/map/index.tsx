const Map = () => {
    return (
        <div id="ubicacion">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.465253441941!2d-89.61212008522136!3d21.014062186006306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5676b96b60f7a3%3A0x4532a4c5af95b0cc!2s28St%20Coworking%20Center!5e0!3m2!1sen!2sus!4v1653072447560!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default Map;
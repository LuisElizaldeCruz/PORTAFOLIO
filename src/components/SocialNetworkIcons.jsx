export const SocialNetworkIcon = ({ url, icono }) => {
    return (
        <>
            <a className="icon-social-network"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {icono}
            </a>
        </>
    );
};


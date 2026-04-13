import os
import re

translations = {
    "fr": {
        "AGARRA es una plataforma curada donde el cine independiente se encuentra con la comunidad. Mira películas, únete a eventos en vivo, participa en conversaciones y obtén recompensas — todo en una experiencia premium.": "AGARRA est une plateforme sélectionnée où le cinéma indépendant rencontre la communauté. Regardez des films, participez à des événements en direct et obtenez des récompenses — le tout dans une expérience premium.",
        "Cada película es seleccionada a mano por su mérito artístico, significado cultural y poder narrativo. Sin algoritmos — solo buen gusto, contexto y cuidado editorial.": "Chaque film est sélectionné à la main pour son mérite artistique et sa signification culturelle. Pas d'algorithmes — juste un bon goût et un soin éditorial.",
        "Únete a watch parties, Q&As en vivo con directores, discusiones comunitarias y eventos en tiempo real. El cine se convierte en una experiencia social y compartida.": "Rejoignez des watch parties, des Q&A en direct avec des réalisateurs et des discussions. Le cinéma devient une expérience sociale et partagée.",
        "Obtén coleccionables, desbloquea accesos exclusivos y construye tu pasaporte de cine. Tu participación tiene un valor real en el ecosistema AGARRA.": "Obtenez des objets de collection et débloquez des accès exclusifs. Votre participation a une valeur réelle dans l'écosystème AGARRA.",
        "Únete a AGARRA y sé parte de una comunidad que valora la narrativa independiente, el intercambio cultural y el arte cinematográfico.": "Rejoignez AGARRA et faites partie d'une communauté qui valorise la narration indépendante et les échanges culturels.",
        "Desbloquea acceso completo a watch parties exclusivas, eventos con directores, recompensas por participación y votación comunitaria en AGARRA.": "Débloquez l'accès complet aux watch parties exclusives et aux événements avec les réalisateurs.",
        "Transforma tu obra en un ecosistema vivo. AGARRA empodera a cineastas permitiéndoles monetizar la participación del público.": "Transformez votre œuvre en un écosystème vivant. AGARRA donne des moyens d'action aux cinéastes."
    },
    "de": {
        "AGARRA es una plataforma curada donde el cine independiente se encuentra con la comunidad. Mira películas, únete a eventos en vivo, participa en conversaciones y obtén recompensas — todo en una experiencia premium.": "AGARRA ist eine kuratierte Plattform, auf der Independent-Kino auf die Community trifft. Sieh dir Filme an, nimm an Live-Events teil und erhalte Belohnungen.",
        "Cada película es seleccionada a mano por su mérito artístico, significado cultural y poder narrativo. Sin algoritmos — solo buen gusto, contexto y cuidado editorial.": "Jeder Film ist handverlesen aufgrund seines künstlerischen Werts. Keine Algorithmen — nur guter Geschmack.",
        "Únete a watch parties, Q&As en vivo con directores, discusiones comunitarias y eventos en tiempo real. El cine se convierte en una experiencia social y compartida.": "Schließe dich Watch-Partys und Live-Q&As mit Regisseuren an. Kino wird zu einem sozialen Erlebnis.",
        "Obtén coleccionables, desbloquea accesos exclusivos y construye tu pasaporte de cine. Tu participación tiene un valor real en el ecosistema AGARRA.": "Sammle Sammlerstücke und schalte exklusiven Zugang frei. Deine Teilnahme hat echten Wert.",
        "Únete a AGARRA y sé parte de una comunidad que valora la narrativa independiente, el intercambio cultural y el arte cinematográfico.": "Treten Sie AGARRA bei und werden Sie Teil einer Community, die unabhängiges Geschichtenerzählen schätzt.",
        "Desbloquea acceso completo a watch parties exclusivas, eventos con directores, recompensas por participación y votación comunitaria en AGARRA.": "Schalte vollen Zugriff auf exklusive Watch-Partys und Events mit Regisseuren frei.",
        "Transforma tu obra en un ecosistema vivo. AGARRA empodera a cineastas permitiéndoles monetizar la participación del público.": "Verwandle dein Werk in ein lebendiges Ökosystem."
    },
    "it": {
        "AGARRA es una plataforma curada donde el cine independiente se encuentra con la comunidad. Mira películas, únete a eventos en vivo, participa en conversaciones y obtén recompensas — todo en una experiencia premium.": "AGARRA è una piattaforma in cui il cinema indipendente incontra la comunità. Guarda film, partecipa a eventi dal vivo e ottieni premi.",
        "Cada película es seleccionada a mano por su mérito artístico, significado cultural y poder narrativo. Sin algoritmos — solo buen gusto, contexto y cuidado editorial.": "Ogni film è selezionato a mano per il suo merito artistico. Niente algoritmi — solo buon gusto.",
        "Únete a watch parties, Q&As en vivo con directores, discusiones comunitarias y eventos en tiempo real. El cine se convierte en una experiencia social y compartida.": "Unisciti a watch parties, Q&A dal vivo con registi e discussioni comunitarie.",
        "Obtén coleccionables, desbloquea accesos exclusivos y construye tu pasaporte de cine. Tu participación tiene un valor real en el ecosistema AGARRA.": "Ottieni oggetti da collezione e sblocca accessi esclusivi.",
        "Únete a AGARRA y sé parte de una comunidad que valora la narrativa independiente, el intercambio cultural y el arte cinematográfico.": "Unisciti ad AGARRA e fai parte di una comunità che valorizza la narrazione indipendente.",
        "Desbloquea acceso completo a watch parties exclusivas, eventos con directores, recompensas por participación y votación comunitaria en AGARRA.": "Sblocca l'accesso completo a watch parties ed eventi esclusivi con i registi.",
        "Transforma tu obra en un ecosistema vivo. AGARRA empodera a cineastas permitiéndoles monetizar la participación del público.": "Trasforma la tua opera in un ecosistema vivo."
    },
    "pt": {
        "AGARRA es una plataforma curada donde el cine independiente se encuentra con la comunidad. Mira películas, únete a eventos en vivo, participa en conversaciones y obtén recompensas — todo en una experiencia premium.": "O AGARRA é uma plataforma selecionada onde o cinema independente encontra a comunidade.",
        "Cada película es seleccionada a mano por su mérito artístico, significado cultural y poder narrativo. Sin algoritmos — solo buen gusto, contexto y cuidado editorial.": "Cada filme é selecionado à mão pelo seu mérito artístico.",
        "Únete a watch parties, Q&As en vivo con directores, discusiones comunitarias y eventos en tiempo real. El cine se convierte en una experiencia social y compartida.": "Junte-se a watch parties, Q&As ao vivo e discussões em tempo real.",
        "Obtén coleccionables, desbloquea accesos exclusivos y construye tu pasaporte de cine. Tu participación tiene un valor real en el ecosistema AGARRA.": "Obtenha colecionáveis e desbloqueie acesso exclusivo.",
        "Únete a AGARRA y sé parte de una comunidad que valora la narrativa independiente, el intercambio cultural y el arte cinematográfico.": "Junte-se ao AGARRA e faça parte de uma comunidade independente.",
        "Desbloquea acceso completo a watch parties exclusivas, eventos con directores, recompensas por participación y votación comunitaria en AGARRA.": "Desbloqueie acesso completo a watch parties exclusivas.",
        "Transforma tu obra en un ecosistema vivo. AGARRA empodera a cineastas permitiéndoles monetizar la participación del público.": "Transforma o teu filme num ecossistema vivo."
    }
}

target_files = ['Index', 'Explore', 'Creators', 'Pass', 'Journal']
directory = 'src/pages'

for lang, dictionary in translations.items():
    suffix = lang.capitalize() + '.tsx'
    
    for basename in target_files:
        filepath = os.path.join(directory, basename + suffix)
        if os.path.exists(filepath):
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            for es_text, tr_text in dictionary.items():
                # Escape the text and replace spaces with regex for whitespace & newlines
                escaped = re.escape(es_text).replace(r'\ ', r'\s+')
                # Perform regex replacement
                content = re.sub(escaped, tr_text, content, flags=re.MULTILINE)
                
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)

print("Regex translations applied.")

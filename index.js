const Discord = require("discord.js");
const moment = require("moment");

const prefix = "!"; // Prefijo del comando

const client = new Discord.Client({
  intents: 3276799,
});

client.on("ready", () => {
  console.log(`Bot conectado como ${client.user.tag}`);

  // Establecer el estado del bot
  client.user.setPresence({
    status: 'online', // Puede ser 'online', 'idle', 'dnd' (no molestar) o 'invisible'
    activity: {
      name: 'Grand Theft Auto VI',
      type: 'PLAYING' // Puede ser 'PLAYING', 'STREAMING', 'LISTENING' o 'WATCHING'
    }
  });
});

client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase();

  if (command === "info") {
    // Obtener la información del usuario
    const user = message.author;
    const username = user.username;
    const avatarURL = user.displayAvatarURL({ dynamic: true });
    const createdAt = user.createdAt;
    const botURL = client.user.displayAvatarURL({ dynamic: true });
    // Formatear la fecha utilizando moment.js
    const formattedDate = moment(createdAt).format("DD/MM/YYYY, HH:mm:ss");

    // Crear un mensaje embed con la información del usuario
    const embed = new Discord.EmbedBuilder()
      .setTitle("Información del Usuario")
      .setURL("https://indarkdevelopers.wordpress.com")
      .setDescription("Este usuario lleva activo desde: " + formattedDate)
      .setAuthor({
        name: client.user.username,
        iconURL: botURL,
      })
      .setThumbnail(avatarURL)
      .setFooter({
        text: client.user.username,
        iconURL: botURL,
      })
      .setTimestamp()
      .setFields(
        {
          name: "Usuario",
          value: username,
          inline: true,
        },
        {
          name: "Tag",
          value: user.tag,
          inline: true,
        }
      )
      .setColor("#E72900");

    message.channel.send({
      embeds: [embed],
    });
  }

  if (command === "hola") {
    const saludos = [
      "Hola",
      "¡Buenos días!",
      "¡Hola, qué tal!",
      "Saludos",
      "¡Hola, buenas tardes!",
      "¡Hola, buenos días!",
      "¡Hola, buenas noches!",
      "¿Cómo estás?",
      "¡Hola, amigo!",
      "¡Hey!",
      "¡Qué onda!",
      "¡Hola a todos!",
      "¡Buenas!",
      "¡Hola, cómo va!",
      "¡Hola, encantado!",
      "¡Hola, un gusto verte!",
      "¡Hola, qué alegría verte!",
      "¡Hola, cómo te va!",
      "¡Hola, bienvenido!",
      "¡Hola, saludos!",
      "¡Hola, espero que estés bien!",
      "¡Hola, te saludo!",
      "¡Hola, qué bueno verte!",
      "¡Hola, cómo te encuentras!",
      "¡Hola, te doy la bienvenida!",
      "¡Hola, qué placer verte!",
      "¡Hola, qué gusto saludarte!",
      "¡Hola, qué bueno que estés aquí!",
      "¡Hola, qué tal tu día!",
      "¡Hola, te envío saludos!",
      "¡Hola, cómo te ha ido!",
    ];

    const numero = Math.floor(Math.random() * saludos.length);
    message.channel.send(saludos[numero]+" "+ message.author.username);
  }

  if (command === "insulta") {
    const insultos = [
      "Una cagada",
      "asquerosa, ",
      "repelente, ",
      "abyecta, ",
      "vomitiva, ",
      "mugrosa, ",
      "maldita, ",
      "diarreosa, ",
      "estercolera, ",
      "inmunda, ",
      "malnacida, ",
      "pudenda, ",
      "apestosa, ",
      "maloliente, ",
      "cabrona, ",
      "maricona, ",
      "huevona, ",
      "pendeja, ",
      "tarada, ",
      "cancerígena, ",
      "jodida, ",
      "culeada, ",
      "gilipollesca, ",
      "pelotuda, ",
      "encamada, ",
      "malnacida, ",
      "retardada, ",
      "atrasada, ",
      "inútil, ",
      "mongola, ",
      "incestuosa, ",
      "burda, ",
      "estúpida,",
      "insulsa, ",
      "putrefacta, ",
      "traicionera, ",
      "indigna, ",
      "chupapollas, ",
      "soplahuevos, ",
      "esnifacojones, ",
      "gueleculo, ",
      "coprofágica, ",
      "masca-morrones, ",
      "infecta, ",
      "cerda, ",
      "nauseabunda, ",
      "cochambrosa, ",
      "cochina, ",
      "verdulera, ",
      "infame, ",
      "ruin, ",
      "rastrera, ",
      "degradada, ",
      "descerebrada,",
      "zopenca, ",
      "zafia, ",
      "puta, ",
      "engreída, ",
      "esquizofrénica, ",
      "granúlenla, ",
      "infeliz, ",
      "profana, ",
      "calamitosa, ",
      "deficiente, ",
      "cretina, ",
      "lela, ",
      "ramera, ",
      "fulana, ",
      "calientaguevos, ",
      "ridícula, ",
      "petarda, ",
      "pasmarote, ",
      "fistro, ",
      "desidiosa, ",
      "puta, ",
      "reputa, ",
      "soputa,",
      " recontraputa,",
      "hija de puta,",
      "hija de un millón de putas",
      "escupepitos, ",
      "caradepedo, ",
      "necrofílica, ",
      "alientoamojón, ",
      "lambe-bukaka, ",
      "revuelcaleche, ",
      "coñoesumadre y de su abuela",
      "conchuda, ",
      "culoroto, ",
      "nalgas reventadas, ",
      "tragasable, ",
      "succionaditos, ",
      "esfinterpartido, ",
      "ojetedesilachado, ",
      "sorbemocos, ",
      "capulla, ",
      "pelmaza, ",
      "zoquete,",
      "masturbadora crónica, ",
      "espuria, ",
      "chupa-tampones,",
      " regluda, ",
      "coprófaga, ",
      "gerontofílica, ",
      "turra, ",
      "ojete, ",
      "atorrante, ",
      "tierrúa, ",
      "pajúa, ",
      "amamaguevos, ",
      "onanista ",
      "caradeconcha",
    ];

    const mentionedUser = message.mentions.users.first();

    if (mentionedUser) {
      const numero = Math.floor(Math.random() * insultos.length);
      message.channel.send(`${mentionedUser} es un/a ` + insultos[numero]);
    } else {
      message.channel.send(
        "Debes mencionar a una persona después del comando."
      );
    }
  }



  if (command === 'adivina') {
    // Generar un número aleatorio del 1 al 10
    const numeroAleatorio = Math.floor(Math.random() * 50) + 1;

    // Obtener el número ingresado por el jugador
    const numeroIngresado = parseInt(args[0]);

    // Comprobar si el número ingresado es correcto
    if (!isNaN(numeroIngresado) && numeroIngresado === numeroAleatorio) {
      message.reply('¡Adivinaste! ¡Has ganado!');
    } else {
      message.reply(`No es el número correcto. El número era ${numeroAleatorio}. ¡Inténtalo de nuevo!`);
    }
  }

  if (command === 'pregunta') {
    const preguntas = [
      {
        pregunta: '¿Cuál es la capital de Francia?',
        respuesta: 'París'
      },
      {
        pregunta: '¿En qué año se fundó Microsoft?',
        respuesta: '1975'
      },
      {
        pregunta: '¿Cuál es el elemento químico con el símbolo Hg?',
        respuesta: 'Mercurio'
      },
      {
        pregunta: '¿Quién escribió el libro "Don Quijote de la Mancha"?',
        respuesta: 'Miguel de Cervantes'
      },
      {
        pregunta: '¿Cuál es el océano más grande del mundo?',
        respuesta: 'Océano Pacífico'
      },
      {
        pregunta: '¿Cuál es la montaña más alta del mundo?',
        respuesta: 'Monte Everest'
      },
      {
        pregunta: '¿Cuál es el país más poblado del mundo?',
        respuesta: 'China'
      },
      {
        pregunta: '¿En qué año se descubrió América?',
        respuesta: '1492'
      },
      {
        pregunta: '¿Cuál es la fórmula química del agua?',
        respuesta: 'H2O'
      },
      {
        pregunta: '¿Cuál es el animal más grande del mundo?',
        respuesta: 'Ballena Azul'
      },
      {
        pregunta: '¿Cuál es el país más extenso del mundo?',
        respuesta: 'Rusia'
      },
      {
        pregunta: '¿En qué año se celebró la primera Copa Mundial de Fútbol?',
        respuesta: '1930'
      },
      {
        pregunta: '¿Cuál es el planeta más cercano al Sol?',
        respuesta: 'Mercurio'
      },
      {
        pregunta: '¿Cuál es el autor de la pintura "La Mona Lisa"?',
        respuesta: 'Leonardo da Vinci'
      },
      {
        pregunta: '¿Cuál es el idioma más hablado del mundo?',
        respuesta: 'Chino mandarín'
      },
      {
        pregunta: '¿Cuál es el instrumento musical más antiguo?',
        respuesta: 'Flauta'
      },
      {
        pregunta: '¿Cuál es el elemento químico más abundante en la Tierra?',
        respuesta: 'Oxígeno'
      },
      {
        pregunta: '¿Cuál es la moneda oficial de Japón?',
        respuesta: 'Yen'
      },
      {
        pregunta: '¿En qué año se estrenó la primera película de Star Wars?',
        respuesta: '1977'
      },
      {
        pregunta: '¿Cuál es la capital de Italia?',
        respuesta: 'Roma'
      },
      {
        pregunta: '¿Cuál es el animal terrestre más rápido del mundo?',
        respuesta: 'Guepardo'
      },
      {
        pregunta: '¿Cuál es el libro más vendido de todos los tiempos?',
        respuesta: 'La Biblia'
      },
      {
        pregunta: '¿En qué año se declaró la independencia de Estados Unidos?',
        respuesta: '1776'
      },
      {
        pregunta: '¿Cuál es la capital de España?',
        respuesta: 'Madrid'
      },
      {
        pregunta: '¿Quién pintó "La noche estrellada"?',
        respuesta: 'Vincent van Gogh'
      },
      {
        pregunta: '¿Cuál es el animal más venenoso del mundo?',
        respuesta: 'Medusa de mar'
      },
      {
        pregunta: '¿Cuál es el país más pequeño del mundo?',
        respuesta: 'Ciudad del Vaticano'
      },
      {
        pregunta: '¿En qué año se inventó el teléfono?',
        respuesta: '1876'
      },
      {
        pregunta: '¿Cuál es la capital de Australia?',
        respuesta: 'Canberra'
      },
      {
        pregunta: '¿Cuál es la montaña más alta de América?',
        respuesta: 'Monte Aconcagua'
      }
    ];


    // Obtener una pregunta aleatoria de la lista
    const preguntaAleatoria = preguntas[Math.floor(Math.random() * preguntas.length)];

    // Enviar la pregunta al jugador
    message.channel.send(preguntaAleatoria.pregunta);

    // Escuchar la respuesta del jugador
    const collector = message.channel.createMessageCollector({ filter: m => !m.author.bot, max: 1 });

    collector.on('collect', (msg) => {
      const respuesta = msg.content.toLowerCase();

      // Verificar si la respuesta es correcta
      if (respuesta === preguntaAleatoria.respuesta) {
        message.reply('¡Respuesta correcta! ¡Has ganado!');
      } else {
        message.reply(`Respuesta incorrecta. La respuesta correcta era: \`${preguntaAleatoria.respuesta}\``);
      }
    });
  }

  if(command === 'michi'){
    const michis = ["https://i.ibb.co/XpkVjwK/5eebd81e63b91f3b6e818f9edce18baf.jpg", "https://i.ibb.co/2jZyp5z/7d6122f6e7d35fd6ab6ec4e6dd7efe5a.png", "https://i.ibb.co/cFkcJ3T/85ee3c89defd04233ce7c4d8037440ca.jpg", "https://i.ibb.co/xMDXzkY/4907b41261ae38bad96deb87f5e67137.jpg", "https://i.ibb.co/wg8XkJV/57470c87d74b91659da100a439935cb2.jpg", "https://i.ibb.co/D5k116v/188523a1ca320946134ea617594dd28e.jpg", "https://i.ibb.co/ZKY764k/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.jpg", "https://i.ibb.co/d2Vvbvr/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.jpg", "https://i.ibb.co/kVLJZJ9/descarga-2.jpg", "https://i.ibb.co/sFRrGMx/descarga-3.jpg", "https://i.ibb.co/3FjbQCD/ef9c2927d40d1ae3e0a1d5ba540d3eb9.jpg", "https://i.ibb.co/n3VgdkK/FCw2d4l-WQAANw-FX.jpg"];
    const numeroaleatorio = Math.floor(Math.random() * michis.length);


    const embed = new Discord.EmbedBuilder()
      .setTitle("Tu michi")
      .setDescription("Aqui tienes a tu michi")
      .setImage(michis[numeroaleatorio]);

    message.channel.send({
      embeds: [embed],
    });
  }



  if(command === "instrucciones"){
    const embed = new Discord.EmbedBuilder()
      .setTitle("INSTRUCCIONES")
      .setURL("https://indarkdevelopers.wordpress.com")
      .setDescription("A continuacion dejate los comandos para poder usar le bot")
      .setAuthor({
        name: client.user.username,
        iconURL: client.user.displayAvatarURL({ dynamic: true }),
      })
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .setFooter({
        text: client.user.username,
        iconURL: client.user.displayAvatarURL({ dynamic: true }),
      })
      .setTimestamp()
      .setFields(
        {
          name: "!info",
          value: "Para ver la informacion del usuario",
          inline: false,
        },
        {
          name: "!insulta @usuario",
          value: "Para insulta al usuario etiquetado",
          inline: false,
        },
        {
          name: "!hola",
          value: "El bot te saluda",
          inline: false,
        },
        {
          name: "!adivina numero",
          value: "Es un minijuego de adivinar numeros de 1 al 50",
          inline: false,
        },
        {
          name: "!pregunta",
          value: "Es un minijuego de preguntas y respuestas",
          inline: false,
        }
        
      )
      .setColor("#E72900");

    message.channel.send({
      embeds: [embed],
    });
  }
});

client.on("guildMemberAdd", async (member) => {
  const welcomeChannel = member.guild.channels.cache.find(
    (channel) => channel.name === "logs"
  );

  if (welcomeChannel) {
    // Enviar mensaje de bienvenida en el canal de bienvenida

    const embed = new Discord.EmbedBuilder()
      .setTitle(`¡Bienvenido/a ${member.user.username}!`)
      .setDescription("¡Recuerda pasarte a leer las normas!")
      .setAuthor({
        name: client.user.username,
        iconURL: client.user.displayAvatarURL({ dynamic: true }),
      })
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setFooter({
        text: client.user.username,
        iconURL: client.user.displayAvatarURL({ dynamic: true }),
      })
      .setTimestamp()
      .setColor("#E72900");

    welcomeChannel.send({
      embeds: [embed],
    });
  }



  
});

client.login(
  "TU_TOKEN"
);

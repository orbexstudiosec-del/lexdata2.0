export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  imageFit?: "cover" | "contain";
  content: Block[];
};

export const posts: Post[] = [
  {
    slug: "tu-caja-ya-esta-registrada-en-la-seps-el-tiempo-corre",
    title: "¿Tu caja ya está registrada en la SEPS? El tiempo corre",
    excerpt:
      "Constituir o adecuar una caja de ahorro no se resuelve copiando documentos de otra entidad. Es un proceso obligatorio, con plazo y con requisitos distintos según el grupo.",
    date: "2026-03-24",
    category: "Cajas de ahorro",
    image: "/img/noticias/cajas-registro-seps.jpeg",
    content: [
      { type: "h2", text: "No se trata de copiar documentos, se trata de hacerlo bien" },
      {
        type: "p",
        text: "Muchas personas creen que constituir, regularizar o adecuar una caja de ahorro es simplemente tomar documentos de otra entidad, cambiar el nombre y volver a presentarlos. Ese es uno de los errores más comunes.",
      },
      {
        type: "p",
        text: "Las cajas de ahorro no son iguales entre sí. Cada una tiene su propia realidad: su vínculo común, su número de socios, su nivel de activos, su estructura interna, su documentación de respaldo y su forma de operación. Por eso, este proceso no puede resolverse con formatos genéricos. La normativa vigente exige vínculo común verificable, constitución o adecuación según corresponda, registro en catastro y documentación específica para el trámite.",
      },
      { type: "h2", text: "¿Es necesario hacer este proceso?" },
      {
        type: "p",
        text: "Sí. Este proceso es obligatorio. La regulación vigente establece que las cajas deben constituirse o adecuar sus estatutos, según corresponda, y registrarse en el catastro público. Además, la SEPS mantiene habilitados servicios específicos para constitución y adecuación, con requisitos concretos que no se cumplen solo con “tener papeles”, sino con documentación coherente y jurídicamente sustentada.",
      },
      { type: "h2", text: "El tiempo se acaba" },
      {
        type: "p",
        text: "La normativa fijó que el plazo para que las cajas se constituyan o adecuen sus estatutos, según el caso, y se registren, es de hasta doce meses contados desde la vigencia de la norma de control correspondiente. Dejar este proceso para después puede convertirse en un riesgo serio para la caja.",
      },
      {
        type: "p",
        text: "La normativa también prevé una moratoria para nuevas constituciones fuera del proceso extraordinario aplicable, lo que vuelve todavía más importante identificar correctamente cuál es la vía legal que corresponde en cada caso.",
      },
      { type: "h2", text: "¿Por qué no sirve copiar y pegar?" },
      {
        type: "p",
        text: "Porque una caja de ahorro debe responder a su propia realidad jurídica y operativa. La SEPS distingue modelos y formatos para Grupo 1, Grupo 2 y Grupo 3, lo que confirma que no todas las cajas deben trabajar con la misma estructura documental. Incluso los requisitos y modelos de acta constitutiva y estatuto social están diferenciados por grupo.",
      },
      {
        type: "p",
        text: "A esto se suma que la normativa exige, entre otros aspectos, justificar el vínculo común y presentar acta constitutiva con al menos diez socios fundadores, estatuto social, manuales obligatorios y otra documentación de respaldo. No se trata de llenar formatos por cumplir: se trata de construir un expediente con concordancia legal, coherencia interna y sustento suficiente.",
      },
      { type: "h2", text: "Análisis de los grupos de cajas" },
      {
        type: "p",
        text: "La clasificación por grupos no es un detalle menor: tiene efectos reales en la estructura y en los requisitos que debe cumplir cada caja. La normativa diferencia tres niveles de activos:",
      },
      {
        type: "ul",
        items: [
          "Grupo 1: activos de hasta USD 100.000.",
          "Grupo 2: activos desde USD 100.001 hasta USD 400.000.",
          "Grupo 3: activos superiores a USD 400.001.",
        ],
      },
      {
        type: "p",
        text: "Esa segmentación impacta, por ejemplo, en los requisitos para representantes legales y vocales, así como en el nivel de exigencia organizativa y documental. Mientras más compleja sea la caja y mayor su nivel de activos, mayor debe ser el cuidado jurídico, documental y técnico. Trabajar con documentos copiados o modelos mal adaptados puede generar observaciones, retrasos y riesgos innecesarios.",
      },
      { type: "h2", text: "Nuestra experiencia" },
      {
        type: "p",
        text: "En Lex Data Corp no trabajamos con soluciones improvisadas ni con documentos genéricos. Analizamos cada caso de manera individual para que la caja de ahorro tenga un expediente coherente, sólido y alineado con la normativa aplicable.",
      },
      {
        type: "quote",
        text: "Trabajamos con cajas desde la normativa emitida en 2021 y contamos con un equipo de profesionales especializados en cajas de ahorro.",
      },
      { type: "h2", text: "Conclusión" },
      {
        type: "p",
        text: "Las cajas de ahorro no deben tratarse como si todas fueran iguales. Este es un proceso obligatorio, con plazo, con requisitos concretos y con diferencias importantes según el grupo y la realidad de cada caja. Hacerlo bien no solo reduce observaciones: también protege jurídicamente a la entidad y le da una base documental seria para operar conforme a la normativa vigente.",
      },
    ],
  },
  {
    slug: "como-saber-si-tu-empresa-necesita-un-delegado-de-proteccion-de-datos",
    title: "¿Cómo saber si tu empresa necesita un Delegado de Protección de Datos?",
    excerpt:
      "Desde el 1 de noviembre de 2025 la designación es obligatoria para las empresas privadas que la ley señala. Siete preguntas para saber si la tuya es una de ellas.",
    date: "2025-10-23",
    category: "Protección de datos",
    image: "/img/noticias/necesitas-delegado.jpeg",
    content: [
      {
        type: "p",
        text: "La Ley Orgánica de Protección de Datos Personales y la Resolución N.º SPDP-SPD-2025-0028-R exigen que ciertas empresas y organizaciones nombren un Delegado de Protección de Datos (DPO). Desde el 1 de noviembre de 2025 no es opcional. Si tu empresa responde “sí” a cualquiera de las siguientes preguntas, debe actuar de inmediato.",
      },
      { type: "h2", text: "¿Operas en sectores sensibles como el financiero, educativo o de salud?" },
      {
        type: "p",
        text: "Estos sectores manejan información crítica: historiales crediticios, datos académicos, diagnósticos médicos. La ley exige un DPO para garantizar que el tratamiento de estos datos cumpla estándares legales y éticos. No contar con uno expone a tu empresa a sanciones graves y a la pérdida de confianza institucional.",
      },
      { type: "h2", text: "¿Guardas información personal sensible?" },
      {
        type: "p",
        text: "Datos como orientación sexual, creencias religiosas, estado de salud o afiliaciones políticas requieren protección reforzada. Si los almacenas, incluso por obligación legal, necesitas un DPO que supervise su tratamiento y garantice su seguridad.",
      },
      { type: "h2", text: "¿Gestionas historias clínicas, huellas digitales u otros datos biométricos?" },
      {
        type: "p",
        text: "Estos datos no solo son sensibles: son únicos e irremplazables, y su mal uso puede generar daños irreversibles. La ley exige un DPO que supervise los protocolos de seguridad, trazabilidad y respuesta ante incidentes.",
      },
      { type: "h2", text: "¿Trabajas con datos de niños o adolescentes?" },
      {
        type: "p",
        text: "La protección de menores es prioritaria. Si tu empresa ofrece servicios educativos (primaria, secundaria o educación superior), o es un centro recreativo, médico o digital dirigido a menores, el nombramiento de un DPO es obligatorio. No basta con buenas intenciones: se requiere cumplimiento técnico y legal.",
      },
      { type: "h2", text: "¿Registras datos de clientes, empleados o proveedores de forma masiva?" },
      {
        type: "p",
        text: "Toda base de datos con información personal —nombres, cédulas, correos, teléfonos— está regulada. Si tu empresa los recopila, almacena o analiza, debe contar con un DPO que garantice transparencia, consentimiento informado y derechos de los titulares. El consentimiento por sí solo no te libra de sanciones: debes implementar medidas organizativas, técnicas, jurídicas y administrativas.",
      },
      { type: "h2", text: "¿Realizas videovigilancia o análisis de telecomunicaciones de forma masiva?" },
      {
        type: "p",
        text: "Las cámaras, grabaciones y el monitoreo de comunicaciones implican un tratamiento intensivo de datos personales. Si tu empresa los utiliza para seguridad, control o análisis, el DPO debe supervisar su legalidad, proporcionalidad y finalidad.",
      },
      { type: "h2", text: "¿Usas reconocimiento facial, geolocalización o inteligencia artificial?" },
      {
        type: "p",
        text: "Estas tecnologías procesan datos de forma automatizada y pueden afectar derechos fundamentales. La ley exige que un DPO evalúe los riesgos, valide los algoritmos y garantice que el uso sea legítimo, transparente y seguro.",
      },
      {
        type: "quote",
        text: "Si respondiste afirmativamente a cualquiera de estas preguntas, tu empresa está legalmente obligada a nombrar un DPO y aplicar la normativa vigente de forma inmediata.",
      },
      { type: "h2", text: "Cómo te ayudamos" },
      {
        type: "p",
        text: "Contamos con un equipo interdisciplinario con certificaciones nacionales e internacionales en protección de datos, derecho digital, auditoría legal y gestión normativa. Ofrecemos soluciones integrales en:",
      },
      {
        type: "ul",
        items: [
          "Implementación estratégica de la Ley de Protección de Datos Personales.",
          "Asesoría legal especializada para cada sector.",
          "Auditorías técnicas y jurídicas de cumplimiento.",
          "Nombramiento y gestión de Delegados de Protección de Datos (DPO).",
        ],
      },
      {
        type: "p",
        text: "¿No tienes un delegado que califique? Nosotros podemos ejercer como el delegado de tu empresa.",
      },
    ],
  },
  {
    slug: "nueva-norma-de-control-para-cajas-comunales-y-cajas-de-ahorro",
    title: "Nueva norma de control para cajas comunales y cajas de ahorro",
    excerpt:
      "La SEPS aprobó la norma que regula la constitución, el gobierno y la liquidación de cajas comunales y de ahorro. Vigente desde el 20 de noviembre de 2025.",
    date: "2025-10-21",
    category: "Cajas de ahorro",
    image: "/img/noticias/norma-seps.png",
    imageFit: "contain",
    content: [
      {
        type: "p",
        text: "En septiembre de 2025, la Superintendencia de Economía Popular y Solidaria (SEPS) emitió la Resolución N.º SEPS-IGT-IGS-IGJ-INSESF-INFMR-INSEPS-INGINT-2025-0148, mediante la cual se aprueba la Norma de Control para la Constitución, Gobierno y Liquidación de Cajas Comunales y Cajas de Ahorro. La disposición entra en vigencia el 20 de noviembre de 2025.",
      },
      { type: "h2", text: "Objetivo" },
      {
        type: "p",
        text: "Regular los procesos de creación, funcionamiento, supervisión y liquidación de las cajas comunales y de ahorro, promoviendo la transparencia, la gobernanza responsable y la sostenibilidad dentro del Sector Financiero Popular y Solidario.",
      },
      { type: "h2", text: "Aspectos principales" },
      { type: "h3", text: "Constitución" },
      {
        type: "ul",
        items: [
          "Las cajas deben formarse con un mínimo de 10 socios que mantengan un vínculo común verificable (comunitario, gremial, laboral o familiar).",
          "Solo podrán realizar operaciones con sus socios; no pueden captar fondos de terceros.",
          "La SEPS otorgará la personalidad jurídica una vez cumplidos los requisitos legales y técnicos.",
        ],
      },
      { type: "h3", text: "Estructura interna" },
      {
        type: "ul",
        items: [
          "Órgano de gobierno: asamblea de socios, instancia máxima de decisión.",
          "Órgano directivo: encargado de la administración y las políticas institucionales.",
          "Órgano de control: fiscaliza la gestión económica y el cumplimiento normativo.",
          "Representante legal: responsable de la gestión operativa y del cumplimiento ante la SEPS.",
        ],
      },
      { type: "h3", text: "Catastro y transparencia" },
      {
        type: "ul",
        items: [
          "La SEPS mantendrá un catastro público con información actualizada de las cajas.",
          "Los representantes legales están obligados a actualizar periódicamente los datos institucionales.",
          "Las cajas se clasifican según sus activos: Grupo 1 (hasta USD 100.000), Grupo 2 (de USD 100.001 a USD 400.000) y Grupo 3 (superior a USD 400.001).",
        ],
      },
      { type: "h2", text: "Requisitos para representantes y directivos" },
      {
        type: "ul",
        items: [
          "Capacitación obligatoria en economía popular y solidaria, finanzas o administración.",
          "Cumplimiento de obligaciones económicas y ausencia de conflictos de interés o parentesco directo con otros vocales (excepto en cajas familiares).",
          "Los cargos tendrán una duración de tres años.",
        ],
      },
      { type: "h2", text: "Liquidación de las cajas" },
      { type: "p", text: "La norma define tres tipos de liquidación:" },
      {
        type: "ul",
        items: [
          "Voluntaria: aprobada por la asamblea general con el voto favorable de las dos terceras partes. Debe demostrarse que la caja puede cumplir todas sus obligaciones antes del cierre.",
          "Forzosa: por disposición de la SEPS cuando no se cumplan las obligaciones con los socios, se omita información requerida, se suspendan operaciones sin autorización, se reduzca el número mínimo de socios o se detecten actividades no permitidas.",
          "Judicial: dispuesta mediante sentencia ejecutoriada de un juez competente.",
        ],
      },
      {
        type: "p",
        text: "El proceso de liquidación podrá durar hasta dos años, prorrogable por un año adicional. Los fondos no reclamados al finalizar se transferirán al Tesoro Nacional.",
      },
      { type: "h2", text: "Sanciones y control" },
      {
        type: "p",
        text: "La SEPS podrá imponer sanciones administrativas, económicas o de intervención a las cajas que:",
      },
      {
        type: "ul",
        items: [
          "No se constituyan o adecuen conforme a la norma dentro de los plazos establecidos.",
          "No entreguen información veraz o incumplan con los reportes obligatorios.",
          "Obstaculicen las labores de supervisión.",
          "Incumplan las disposiciones de control interno, gobierno corporativo o prevención de lavado de activos.",
        ],
      },
      {
        type: "p",
        text: "Las sanciones van desde amonestaciones y multas hasta la suspensión o revocatoria del permiso de funcionamiento. La SEPS también podrá verificar en cualquier momento la veracidad de la información y disponer intervenciones preventivas o procesos de liquidación forzosa.",
      },
      { type: "h2", text: "Régimen transitorio" },
      {
        type: "ul",
        items: [
          "Las cajas comunales, de ahorro y bancos comunales ya constituidos deberán adecuar sus estatutos y registrarse en el catastro público dentro de los 12 meses posteriores a la entrada en vigencia de la norma.",
          "Las cajas que operen sin registro formal podrán acogerse a un procedimiento extraordinario de constitución.",
          "Se mantiene una moratoria temporal: no se tramitarán nuevas constituciones hasta que la Junta de Política y Regulación Financiera levante la restricción vigente.",
        ],
      },
      {
        type: "p",
        text: "En Lex Data Corp somos especialistas en normativa financiera, societaria y de control, y brindamos asesoría integral a cajas comunales, cajas de ahorro y entidades del sector popular y solidario, con un equipo legal, contable y técnico para garantizar el cumplimiento ante la SEPS y otras entidades de control.",
      },
    ],
  },
  {
    slug: "delegado-de-proteccion-de-datos-una-obligacion-que-pocos-conocen",
    title: "Delegado de Protección de Datos: una obligación que pocos conocen",
    excerpt:
      "Desde el 1 de noviembre de 2025 las empresas privadas obligadas deben registrar a su Delegado de Protección de Datos ante la SPDP. Qué implica y qué riesgos trae no cumplir.",
    date: "2025-10-20",
    category: "Protección de datos",
    image: "/img/noticias/delegado-obligacion.jpg",
    content: [
      {
        type: "p",
        text: "A partir del 1 de noviembre de 2025, las empresas privadas en Ecuador están legalmente obligadas a registrar a su Delegado de Protección de Datos (DPD) en el sistema oficial de la Superintendencia de Protección de Datos Personales (SPDP). La medida forma parte de la implementación definitiva de la Ley Orgánica de Protección de Datos Personales, que busca garantizar el respeto, la seguridad y el tratamiento responsable de la información personal en el país.",
      },
      { type: "h2", text: "¿Qué implica esta obligación?" },
      { type: "p", text: "La figura del DPD es clave en el nuevo marco normativo. Su rol incluye:" },
      {
        type: "ul",
        items: [
          "Supervisar el cumplimiento interno de la ley dentro de la empresa.",
          "Actuar como enlace oficial entre la organización y la SPDP.",
          "Gestionar riesgos y reportes relacionados con el tratamiento de datos personales.",
          "Asegurar que los procesos internos respeten los principios de licitud, transparencia, seguridad y confidencialidad.",
        ],
      },
      {
        type: "p",
        text: "El registro del DPD en el sistema de la SPDP no es un trámite simbólico: es una obligación formal que, de no cumplirse, puede derivar en sanciones administrativas, multas y procesos de inspección que afecten la operatividad y la reputación de la empresa.",
      },
      { type: "h2", text: "¿Qué riesgos enfrenta una empresa que no cumple?" },
      {
        type: "ul",
        items: [
          "Multas que dependen de la gravedad de la infracción.",
          "Investigaciones administrativas por parte de la SPDP.",
          "Pérdida de confianza de clientes, aliados estratégicos y entidades públicas.",
          "Bloqueo de operaciones que involucren tratamiento de datos personales.",
        ],
      },
      {
        type: "p",
        text: "En un entorno empresarial cada vez más digitalizado, la protección de datos no es solo una obligación legal, sino un activo reputacional.",
      },
      { type: "h2", text: "Respaldo legal y estratégico para cumplir" },
      {
        type: "p",
        text: "Nuestro equipo multidisciplinario acompaña a empresas de todos los sectores en:",
      },
      {
        type: "ul",
        items: [
          "La designación formal del DPD con respaldo jurídico.",
          "El registro oficial en el sistema de la SPDP, sin errores ni omisiones.",
          "La implementación de políticas internas de protección de datos.",
          "La capacitación institucional de equipos directivos y operativos.",
        ],
      },
      {
        type: "quote",
        text: "Convertimos el cumplimiento en ventaja competitiva. No solo evitamos sanciones: fortalecemos la reputación digital de tu empresa.",
      },
      { type: "h2", text: "¿Cómo iniciar el proceso?" },
      {
        type: "p",
        text: "Contáctanos. Nuestro equipo evaluará tu situación actual y te guiará paso a paso para que tu empresa cumpla con total seguridad y sin contratiempos.",
      },
    ],
  },
  {
    slug: "nuevos-sectores-seran-incorporados-como-sujetos-obligados-a-la-uafe",
    title: "Nuevos sectores se incorporan como sujetos obligados ante la UAFE",
    excerpt:
      "Cajas centrales y comunales, intermediarios financieros, partidos políticos y fundaciones deberán reportar a la UAFE en materia de prevención de lavado de activos.",
    date: "2025-10-20",
    category: "UAFE",
    image: "/img/noticias/uafe-sectores.jpeg",
    content: [
      {
        type: "p",
        text: "La Unidad de Análisis Financiero y Económico (UAFE) ha incorporado nuevos sectores como sujetos obligados al cumplimiento normativo en prevención de lavado de activos.",
      },
      { type: "h2", text: "¿Quiénes deben cumplir ahora?" },
      {
        type: "ul",
        items: [
          "Cajas centrales y comunales.",
          "Intermediarios y asesores financieros.",
          "Partidos, movimientos políticos y fundaciones (excepto religiosas).",
        ],
      },
      {
        type: "p",
        text: "Estas entidades deberán reportar operaciones sospechosas y enviar informes mensuales, conforme a la ley orgánica vigente. La UAFE anunciará la convocatoria oficial para explicar estas obligaciones.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

const dateFormat = new Intl.DateTimeFormat("es-EC", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function formatDate(iso: string) {
  return dateFormat.format(new Date(`${iso}T00:00:00Z`));
}

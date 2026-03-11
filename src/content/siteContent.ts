export type Locale = 'en' | 'zh'
export type ThemeMode = 'dark' | 'light'

type HeroContent = {
  eyebrow: string
  title: string
  subtitle: string
  note: string
  primaryCta: string
  secondaryCta: string
}

type AboutContent = {
  kicker: string
  title: string
  paragraphs: string[]
  tags: string[]
}

type ServiceItem = {
  title: string
  description: string
  points: string[]
}

type ServicesContent = {
  kicker: string
  title: string
  items: ServiceItem[]
}

type ProjectItem = {
  title: string
  background: string
  solution: string
  result: string
}

type ProjectsContent = {
  kicker: string
  title: string
  backgroundLabel: string
  solutionLabel: string
  resultLabel: string
  items: ProjectItem[]
}

type ScopeContent = {
  kicker: string
  title: string
  description: string
  chain: string[]
}

type ContactContent = {
  kicker: string
  title: string
  paragraphs: string[]
  email: string
  buttonLabel: string
}

type UiContent = {
  language: string
  theme: string
  english: string
  chinese: string
  dark: string
  light: string
}

export type SiteContent = {
  ui: UiContent
  hero: HeroContent
  about: AboutContent
  services: ServicesContent
  projects: ProjectsContent
  scope: ScopeContent
  contact: ContactContent
}

export const dictionaries: Record<Locale, SiteContent> = {
  en: {
    ui: {
      language: 'Language',
      theme: 'Theme',
      english: 'EN',
      chinese: '中文',
      dark: 'Dark',
      light: 'Light',
    },
    hero: {
      eyebrow: 'Independent System Engineer',
      title:
        'I build complete intelligent systems - from embedded hardware and sensors to automation, ERP, MES, smart manufacturing, and smart agriculture.',
      subtitle:
        'From devices to enterprise systems, I build the entire intelligent ecosystem for real operations.',
      note: 'If you can describe the problem, I can build the solution.',
      primaryCta: 'View selected work',
      secondaryCta: "Let's work together",
    },
    about: {
      kicker: 'About',
      title: 'About Me',
      paragraphs: [
        'I am an independent developer focused on end-to-end system engineering for industrial and agricultural environments.',
        'My work combines embedded firmware, sensor networks, automation logic, and enterprise software into one reliable operational stack.',
        'I design practical systems that reduce manual work, improve data quality, and help teams run faster with better decision support.',
      ],
      tags: [
        'Embedded & IoT Devices',
        'Intelligent Automation',
        'Smart Manufacturing',
        'Smart Agriculture',
        'ERP / MES Systems',
        'Full-stack Delivery',
        'AI-assisted Engineering',
      ],
    },
    services: {
      kicker: 'Capabilities',
      title: 'What I Build',
      items: [
        {
          title: 'Embedded & IoT Devices',
          description:
            'Build low-power devices and sensor systems with stable data acquisition and communication.',
          points: [
            'Bluetooth ECG monitoring device',
            'Temperature, humidity, and air-quality sensing',
            'BLE communication and edge control logic',
            'Device firmware for low-power operation',
          ],
        },
        {
          title: 'Intelligent Automation',
          description:
            'Turn manual workflows into sensor-driven, traceable, and real-time automation.',
          points: [
            'Smart environmental automation',
            'IoT-based control systems',
            'Device linkage and live monitoring',
            'Data-driven operational decisions',
          ],
        },
        {
          title: 'Smart Manufacturing',
          description: 'Connect production flow, machines, and reporting into one execution system.',
          points: [
            'Production workflow automation',
            'Shop-floor data collection',
            'Scheduling and quality management',
            'MES and ERP integration',
          ],
        },
        {
          title: 'Smart Agriculture',
          description:
            'Design field-ready systems for sensing, control, and farm operation intelligence.',
          points: [
            'Agricultural environment monitoring',
            'Automated irrigation and climate control',
            'Sensor network architecture',
            'Farm data visualization and optimization',
          ],
        },
        {
          title: 'Enterprise Systems',
          description:
            'Deliver ERP, MES, and full-stack platforms aligned with real manufacturing and agriculture workflows.',
          points: [
            'ERP customization and process automation',
            'MES development and execution tracking',
            'Full-stack business systems',
            'AI-assisted development pipeline',
          ],
        },
        {
          title: 'Other',
          description:
            'I can also design websites for businesses or individuals and develop various applications.',
          points: [
            'Business websites',
            'Personal websites',
            'Web applications',
            'Custom software tools',
          ],
        },
      ],
    },
    projects: {
      kicker: 'Projects',
      title: 'Selected Systems',
      backgroundLabel: 'Background',
      solutionLabel: 'Solution',
      resultLabel: 'Result',
      items: [
        {
          title: 'Bluetooth ECG Monitoring Device',
          background: 'Needed a portable, low-power ECG acquisition solution.',
          solution:
            'Developed embedded firmware, BLE communication, and real-time signal processing.',
          result: 'Delivered a stable, accurate, mobile-ready ECG monitoring system.',
        },
        {
          title: 'Environmental Sensor and Automation System',
          background: 'Manual monitoring of temperature, humidity, and air quality was inefficient.',
          solution: 'Built a multi-sensor embedded system with automated control logic.',
          result: 'Achieved fully automated environmental regulation with real-time data.',
        },
        {
          title: 'Smart Agriculture Monitoring and Irrigation',
          background: 'Farms needed automated environmental control and irrigation.',
          solution:
            'Developed a sensor-driven system for soil moisture, climate monitoring, and automated irrigation.',
          result: 'Improved crop stability and reduced manual labor.',
        },
        {
          title: 'Production MES Workflow System',
          background: 'Production tracking lacked visibility and accuracy.',
          solution:
            'Designed a complete MES workflow including scheduling, tracking, and ERP integration.',
          result: 'Improved data accuracy and reduced manual reporting time by over 60%.',
        },
        {
          title: 'ERP Customization for Manufacturing',
          background: 'Standard ERP modules could not match real production workflows.',
          solution:
            'Customized modules and added automation logic for scheduling, quality, and reporting.',
          result: 'Increased workflow accuracy and reduced manual adjustments.',
        },
        {
          title: 'Home Assistant MQTT Desktop Application',
          background:
            'Teams needed a lightweight desktop tool to monitor and control Home Assistant MQTT topics efficiently.',
          solution:
            'Built a cross-platform desktop application with MQTT connection management, real-time topic subscriptions, and device command publishing.',
          result:
            'Improved operational visibility and reduced manual debugging time for smart home and IoT workflows.',
        },
      ],
    },
    scope: {
      kicker: 'End-to-End Scope',
      title: 'One Engineer Across the Entire System Chain',
      description:
        'I work across the full stack of operational systems, so integration and delivery stay consistent from physical devices to enterprise workflows.',
      chain: [
        'Sensors',
        'Embedded firmware',
        'IoT communication',
        'Automation logic',
        'Smart manufacturing',
        'Smart agriculture',
        'ERP / MES',
        'Full-stack applications',
        'AI-assisted optimization',
      ],
    },
    contact: {
      kicker: 'Contact',
      title: "Let's Work Together",
      paragraphs: [
        'I can take any system from concept to deployment: hardware, embedded, IoT, automation, smart manufacturing, smart agriculture, ERP, MES, and full-stack software.',
        'If you can describe the problem, I can build the solution.',
      ],
      email: 'fs95808@gmail.com',
      buttonLabel: 'Send Email',
    },
  },
  zh: {
    ui: {
      language: '语言',
      theme: '主题',
      english: 'EN',
      chinese: '中文',
      dark: '暗黑',
      light: '明亮',
    },
    hero: {
      eyebrow: '独立系统工程师',
      title:
        '我构建完整的智能系统：从嵌入式硬件与传感器，到自动化、ERP、MES、智能制造与智慧农业。',
      subtitle: '从设备端到企业系统端，我可以完成整套智能生态的设计与交付。',
      note: '只要你能描述问题，我就能把解决方案做出来。',
      primaryCta: '查看代表项目',
      secondaryCta: '联系合作',
    },
    about: {
      kicker: '关于',
      title: '关于我',
      paragraphs: [
        '我是独立开发者，专注于工业与农业场景下的端到端系统工程。',
        '我的工作覆盖嵌入式固件、传感器网络、自动化逻辑与企业软件，并将它们整合为稳定可落地的业务系统。',
        '我以工程实效为导向，帮助团队减少人工操作、提升数据质量，并加快决策效率。',
      ],
      tags: [
        '嵌入式与物联网设备',
        '智能自动化',
        '智能制造',
        '智慧农业',
        'ERP / MES 系统',
        '全栈交付',
        'AI 辅助工程',
      ],
    },
    services: {
      kicker: '能力矩阵',
      title: '我能构建什么',
      items: [
        {
          title: '嵌入式与物联网设备',
          description: '构建低功耗设备与传感系统，实现稳定采集与通信。',
          points: [
            '蓝牙 ECG 心电监测设备',
            '温湿度与空气质量传感',
            'BLE 通信与边缘控制逻辑',
            '低功耗固件开发',
          ],
        },
        {
          title: '智能自动化',
          description: '将人工流程升级为传感驱动、可追踪、实时联动的自动化系统。',
          points: ['环境智能调控', 'IoT 控制系统', '设备联动与实时监控', '数据驱动决策'],
        },
        {
          title: '智能制造',
          description: '打通生产流程、设备数据与报表体系，形成一体化执行系统。',
          points: ['生产流程自动化', '车间数据采集', '排产与质量管理', 'MES 与 ERP 集成'],
        },
        {
          title: '智慧农业',
          description: '为农业场景构建可落地的感知、控制与运营智能系统。',
          points: ['农业环境监测', '自动灌溉与气候控制', '农业传感器网络', '农业数据可视化与优化'],
        },
        {
          title: '企业系统',
          description: '交付匹配制造与农业业务流程的 ERP、MES 与全栈平台。',
          points: ['ERP 定制与流程自动化', 'MES 开发与执行追踪', '全栈业务系统', 'AI 辅助开发流程'],
        },
        {
          title: '其他',
          description: '当然我也可以为你设计企业或个人网站，开发各种应用程序。',
          points: ['企业官网设计', '个人网站设计', 'Web 应用开发', '定制软件工具开发'],
        },
      ],
    },
    projects: {
      kicker: '项目',
      title: '代表系统',
      backgroundLabel: '背景',
      solutionLabel: '方案',
      resultLabel: '结果',
      items: [
        {
          title: '蓝牙 ECG 心电监测设备',
          background: '需要一套便携、低功耗的心电采集方案。',
          solution: '开发嵌入式固件、BLE 通信与实时信号处理能力。',
          result: '交付稳定、准确、可移动化部署的心电监测系统。',
        },
        {
          title: '环境传感与自动控制系统',
          background: '温湿度与空气质量依靠人工监测，效率低且不稳定。',
          solution: '构建多传感器嵌入式系统并集成自动控制逻辑。',
          result: '实现环境调控自动化与实时数据可视化。',
        },
        {
          title: '智慧农业监测与灌溉系统',
          background: '农业场景需要环境与灌溉的自动控制能力。',
          solution: '构建基于土壤与气候数据的传感驱动系统与自动灌溉逻辑。',
          result: '提升作物稳定性并降低人工投入。',
        },
        {
          title: '生产 MES 流程系统',
          background: '生产追踪缺少可视化与准确性。',
          solution: '设计完整 MES 流程，覆盖排产、追踪与 ERP 联动。',
          result: '数据准确率提升，并将人工报表时间降低 60% 以上。',
        },
        {
          title: '制造业 ERP 定制系统',
          background: '标准 ERP 模块无法匹配真实生产流程。',
          solution: '定制排产、质量与报表模块，并加入自动化逻辑。',
          result: '流程准确性提升，人工调整明显减少。',
        },
        {
          title: 'Home Assistant MQTT 桌面应用程序',
          background: '团队需要一个轻量桌面工具，用于高效监控和控制 Home Assistant 的 MQTT 主题。',
          solution:
            '开发跨平台桌面应用，集成 MQTT 连接管理、主题实时订阅与设备指令发布能力。',
          result: '显著提升智能家居与 IoT 场景的运维可视化能力，并减少人工排查时间。',
        },
      ],
    },
    scope: {
      kicker: '全链路能力',
      title: '一个工程师覆盖整条系统链路',
      description:
        '我覆盖从物理设备到企业流程的软件硬件全栈，确保系统集成与交付的一致性。',
      chain: [
        '传感器',
        '嵌入式固件',
        'IoT 通信',
        '自动化逻辑',
        '智能制造',
        '智慧农业',
        'ERP / MES',
        '全栈应用',
        'AI 辅助优化',
      ],
    },
    contact: {
      kicker: '联系',
      title: '一起把系统落地',
      paragraphs: [
        '我可以把任何系统从概念推进到上线交付：硬件、嵌入式、IoT、自动化、智能制造、智慧农业、ERP、MES 和全栈软件。',
        '你描述业务问题，我负责把它做成可运行的系统。',
      ],
      email: 'fs95808@gmail.com',
      buttonLabel: '发送邮件',
    },
  },
}

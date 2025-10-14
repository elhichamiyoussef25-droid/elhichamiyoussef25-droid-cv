// قاعدة البيانات للردود والمواضيع
const knowledgeBase = {
    "learn": {
        title: "التعلم",
        description: "اختر المجال الذي تريد تعلمه",
        options: {
            "programming": {
                title: "البرمجة",
                description: "تعلم أساسيات البرمجة ولغاتها المختلفة",
                responses: [
                    "البرمجة هي عملية كتابة تعليمات وتوجيه أوامر لجهاز الحاسوب لتنفيذ مهمة محددة.",
                    "أشهر لغات البرمجة: Python, JavaScript, Java, C++, وغيرها.",
                    "ابدأ بتعلم أساسيات الخوارزميات وهياكل البيانات قبل الانتقال للغات محددة.",
                    "HTML و CSS ليسا لغات برمجة، بل هما لغات ترميز وتصميم للويب.",
                    "جافا سكريبت هي لغة برمجة تستخدم لتطوير الويب التفاعلي.",
                    "بايثون لغة ممتازة للمبتدئين بسبب بساطة تركيبها وسهولة قراءتها."
                ]
            },
            "sports": {
                title: "الرياضة",
                description: "تعلم أساسيات الرياضات المختلفة",
                responses: [
                    "الرياضة تساعد في تحسين الصحة البدنية والعقلية.",
                    "من أهم الرياضات: كرة القدم، كرة السلة، السباحة، الجري، رفع الأثقال.",
                    "ابدأ بتمارين الإحماء دائمًا قبل أي نشاط رياضي لتجنب الإصابات.",
                    "التغذية السليمة جزء أساسي من النجاح في أي رياضة.",
                    "الانتظام في التمرين أهم من كثافة التمرين.",
                    "لا تنسى تمارين التهدئة والاستطالة بعد الانتهاء من التمرين."
                ]
            },
            "languages": {
                title: "اللغات",
                description: "تعلم لغات جديدة",
                responses: [
                    "تعلم اللغات يفتح آفاقًا جديدة للتواصل والفرص الوظيفية.",
                    "أشهر اللغات طلبًا: الإنجليزية، الإسبانية، الفرنسية، الألمانية، الصينية.",
                    "ابدأ بتعلم الكلمات الأساسية والعبارات الشائعة في اللغة التي تريد تعلمها.",
                    "الممارسة اليومية هي مفتاح إتقان أي لغة جديدة.",
                    "استخدم تطبيقات تعلم اللغات مثل Duolingo أو Memrise للمساعدة.",
                    "شاهد الأفلام والمسلسلات باللغة التي تتعلمها لتحسين مهارة الاستماع."
                ]
            },
            "science": {
                title: "العلوم",
                description: "استكشف عالم العلوم",
                responses: [
                    "العلوم تنقسم إلى عدة فروع: الفيزياء، الكيمياء، الأحياء، الفلك، وغيرها.",
                    "الفيزياء تدرس المادة والطاقة وتفاعلاتهما.",
                    "الكيمياء تدرس تركيب المادة وتفاعلاتها وتحولاتها.",
                    "علم الأحياء يدرس الكائنات الحية ووظائفها وتطورها.",
                    "النظرية العلمية تختلف عن الفرضية - النظرية مدعومة بأدلة واختبارات متعددة.",
                    "الطريقة العلمية تعتمد على الملاحظة، الفرضية، التجربة، والتحليل."
                ]
            }
        }
    },
    "chat": {
        title: "الدردشة",
        description: "تحدث معي حول أي موضوع",
        responses: [
            "مرحباً! كيف يمكنني مساعدتك اليوم؟",
            "أنا هنا للإجابة على أسئلتك وتقديم المساعدة.",
            "هل لديك أي هوايات أو اهتمامات تريد التحدث عنها؟",
            "ما رأيك في الطقس اليوم؟",
            "أحب التعرف على اهتمامات الناس وأفكارهم.",
            "هل قرأت أي كتاب مثير للاهتمام مؤخرًا؟",
            "ما هي أكثر المواضيع التي تثير فضولك؟"
        ]
    },
    "help": {
        title: "المساعدة",
        description: "كيف يمكنني مساعدتك؟",
        options: {
            "technical": {
                title: "مساعدة تقنية",
                description: "مشاكل تقنية تحتاج لحل",
                responses: [
                    "لحل مشاكل الكمبيوتر، جرب إعادة التشغيل أولاً - يحل العديد من المشاكل.",
                    "تأكد من تحديث برامجك ونظام التشغيل بانتظام.",
                    "لتحسين أداء الكمبيوتر، قم بتنظيف الملفات المؤقتة وإلغاء تثبيت البرامج غير الضرورية.",
                    "لحماية جهازك، استخدم برنامج مكافحة فيروسات موثوقًا وكن حذرًا من الروابط المشبوهة.",
                    "لتحسين سرعة الإنترنت، جرب إعادة تشغيل المودم/الراوتر أو تقليل عدد الأجهزة المتصلة.",
                    "لحل مشاكل الطباعة، تأكد من اتصال الطابعة وتثبيت التعريفات الصحيحة."
                ]
            },
            "study": {
                title: "مساعدة دراسية",
                description: "تحسين الأداء الدراسي",
                responses: [
                    "لتحسين تركيزك أثناء الدراسة، اختر مكانًا هادئًا وخالي من المشتتات.",
                    "طريقة البومودورو: ادرس لمدة 25 دقيقة ثم خذ استراحة 5 دقائق.",
                    "استخدم الخرائط الذهنية لتنظيم المعلومات وتسهيل تذكرها.",
                    "النوم الكافي أساسي للذاكرة والتركيز - احرص على 7-9 ساعات نوم.",
                    "راجع المادة بانتظام بدلاً من الدراسة المكثفة قبل الامتحان فقط.",
                    "اطلب المساعدة من المعلمين أو الزملاء عندما تواجه صعوبة في فهم موضوع ما."
                ]
            },
            "career": {
                title: "مساعدة مهنية",
                description: "تطوير المسار الوظيفي",
                responses: [
                    "لتحسين سيرتك الذاتية، ركز على الإنجازات والنتائج وليس فقط المهام.",
                    "التدريب العملي والمشاريع الشخصية تزيد من فرصك الوظيفية في مجال التكنولوجيا.",
                    "طور شبكة علاقات مهنية من خلال حضور الفعاليات وربطك مع محترفين في مجالك.",
                    "التعلم المستضر هو مفتاح النجاح في سوق العمل المتغير بسرعة.",
                    "حدد أهدافًا مهنية واضحة وقابلة للقياس، وراجع تقدمك بانتظام.",
                    "لا تخف من تغيير مسارك المهني إذا وجدت أن شغفك في مجال آخر."
                ]
            }
        }
    },
    "other": {
        title: "شيء آخر",
        description: "مواضيع متنوعة",
        responses: [
            "أنا هنا للإجابة على أي أسئلة أخرى قد تكون لديك.",
            "لا تتردد في سؤالي عن أي موضوع يخطر ببالك.",
            "أحب التعلم من المستخدمين مثلك، فما الذي تريد التحدث عنه؟",
            "كل يوم أتعلم شيئًا جديدًا من خلال المحادثات مع المستخدمين.",
            "ما هو أكثر شيء يثير فضولك في الحياة؟",
            "هل لديك أي اقتراحات لتحسين خدمتي؟"
        ]
    }
};

// حالة التطبيق الحالية
let currentState = {
    section: 'main',
    category: null,
    subcategory: null
};

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

// تهيئة التطبيق
function initializeApp() {
    renderMainOptions();
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    document.getElementById('backButton').addEventListener('click', goBack);
    document.getElementById('sendButton').addEventListener('click', sendMessage);
    document.getElementById('userInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// عرض الخيارات الرئيسية
function renderMainOptions() {
    const optionsGrid = document.getElementById('mainOptions');
    optionsGrid.innerHTML = '';
    
    const options = [
        {
            id: 'learn',
            icon: '📚',
            title: 'تعلم',
            description: 'استكشف مواضيع جديدة وتعلم مهارات مختلفة'
        },
        {
            id: 'chat',
            icon: '💬',
            title: 'دردشة',
            description: 'تحدث معي حول أي موضوع يهمك'
        },
        {
            id: 'help',
            icon: '🆘',
            title: 'مساعدة',
            description: 'احصل على المساعدة في مختلف المجالات'
        },
        {
            id: 'other',
            icon: '🔍',
            title: 'شيء آخر',
            description: 'مواضيع متنوعة وأسئلة عامة'
        }
    ];
    
    options.forEach(option => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.innerHTML = `
            <div class="option-icon">${option.icon}</div>
            <h3>${option.title}</h3>
            <p>${option.description}</p>
        `;
        card.addEventListener('click', () => selectMainOption(option.id));
        optionsGrid.appendChild(card);
    });
    
    // إظهار الخيارات الرئيسية وإخفاء قسم الدردشة
    document.getElementById('mainOptions').classList.remove('hidden');
    document.getElementById('chatSection').classList.add('hidden');
    
    // إعادة تعيين الحالة
    currentState = { section: 'main', category: null, subcategory: null };
}

// اختيار خيار رئيسي
function selectMainOption(optionId) {
    const option = knowledgeBase[optionId];
    
    if (option.options) {
        // إذا كان هناك خيارات فرعية، اعرضها
        renderSubOptions(optionId, option.options);
    } else {
        // إذا لم يكن هناك خيارات فرعية، ابدأ الدردشة مباشرة
        startChat(optionId);
    }
}

// عرض الخيارات الفرعية
function renderSubOptions(category, subOptions) {
    const optionsGrid = document.getElementById('mainOptions');
    optionsGrid.innerHTML = '';
    
    // إضافة زر العودة
    const backCard = document.createElement('div');
    backCard.className = 'option-card';
    backCard.innerHTML = `
        <div class="option-icon">↶</div>
        <h3>العودة</h3>
        <p>العودة إلى القائمة الرئيسية</p>
    `;
    backCard.addEventListener('click', renderMainOptions);
    optionsGrid.appendChild(backCard);
    
    // عرض الخيارات الفرعية
    Object.keys(subOptions).forEach(key => {
        const subOption = subOptions[key];
        const card = document.createElement('div');
        card.className = 'option-card';
        card.innerHTML = `
            <div class="option-icon">${getIconForSubcategory(key)}</div>
            <h3>${subOption.title}</h3>
            <p>${subOption.description}</p>
        `;
        card.addEventListener('click', () => startChat(category, key));
        optionsGrid.appendChild(card);
    });
    
    // تحديث الحالة
    currentState = { section: 'suboptions', category: category, subcategory: null };
}

// بدء الدردشة
function startChat(category, subcategory = null) {
    // تحديث الحالة
    currentState = { section: 'chat', category: category, subcategory: subcategory };
    
    // تحديث عنوان الدردشة
    let title = knowledgeBase[category].title;
    if (subcategory) {
        title += ` - ${knowledgeBase[category].options[subcategory].title}`;
    }
    document.getElementById('chatTitle').textContent = title;
    
    // إخفاء الخيارات الرئيسية وإظهار قسم الدردشة
    document.getElementById('mainOptions').classList.add('hidden');
    document.getElementById('chatSection').classList.remove('hidden');
    
    // مسح الرسائل السابقة
    document.getElementById('chatMessages').innerHTML = '';
    
    // إضافة رسالة ترحيبية
    addBotMessage(getWelcomeMessage(category, subcategory));
    
    // التركيز على حقل الإدخال
    document.getElementById('userInput').focus();
}

// الحصول على رسالة الترحيب المناسبة
function getWelcomeMessage(category, subcategory) {
    if (subcategory) {
        return `مرحباً بك في قسم ${knowledgeBase[category].options[subcategory].title}! كيف يمكنني مساعدتك؟`;
    } else {
        return `مرحباً بك في قسم ${knowledgeBase[category].title}! أنا هنا لمساعدتك. ما الذي تريد التحدث عنه؟`;
    }
}

// إضافة رسالة من المستخدم
function addUserMessage(message) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.className = 'message user-message';
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    scrollToBottom();
}

// إضافة رسالة من البوت
function addBotMessage(message) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.className = 'message bot-message';
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    scrollToBottom();
}

// التمرير إلى الأسفل
function scrollToBottom() {
    const messagesContainer = document.getElementById('chatMessages');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// إرسال رسالة
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // إضافة رسالة المستخدم
    addUserMessage(message);
    
    // مسح حقل الإدخال
    userInput.value = '';
    
    // محاكاة التفكير ثم الرد
    setTimeout(() => {
        const response = generateResponse(message);
        addBotMessage(response);
    }, 1000);
}

// توليد رد
function generateResponse(userMessage) {
    const { category, subcategory } = currentState;
    let responses;
    
    if (subcategory) {
        responses = knowledgeBase[category].options[subcategory].responses;
    } else {
        responses = knowledgeBase[category].responses;
    }
    
    // اختيار رد عشوائي من القائمة
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

// العودة للخلف
function goBack() {
    if (currentState.section === 'chat') {
        if (currentState.subcategory) {
            // العودة إلى الخيارات الفرعية
            renderSubOptions(currentState.category, knowledgeBase[currentState.category].options);
        } else {
            // العودة إلى الخيارات الرئيسية
            renderMainOptions();
        }
    } else if (currentState.section === 'suboptions') {
        // العودة إلى الخيارات الرئيسية
        renderMainOptions();
    }
}

// الحصول على الأيقونة المناسبة للخيار الفرعي
function getIconForSubcategory(subcategory) {
    const icons = {
        'programming': '💻',
        'sports': '⚽',
        'languages': '🗣️',
        'science': '🔬',
        'technical': '🔧',
        'study': '📖',
        'career': '💼'
    };
    
    return icons[subcategory] || '❓';
}
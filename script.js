const translations = {
    "vi": {
        "hero_title": "Tiến bộ bền vững luôn bắt đầu từ những phương pháp đúng đắn.",
        "hero_subtitle": "Công cụ phù hợp giúp bạn học tập, làm việc và phát triển hiệu quả hơn với ít nỗ lực hơn.",
        "section_title": "Sản phẩm",
        "gino_desc": "Biến ghi chú thành kiến thức thực sự được ghi nhớ. Ghi chú, ôn tập và học tập hiệu quả với Active Recall và Spaced Repetition. Dữ liệu của bạn được đồng bộ và có thể truy cập mọi lúc, mọi nơi.",
        "rusa_desc": "Đọc sách theo cách của riêng bạn. RusaReader hỗ trợ đọc sách và nghe TTS, đồng thời biến hành trình đọc thành một khu rừng tri thức để bạn lưu lại cảm nghĩ, kinh nghiệm và những điều tâm đắc từ mỗi cuốn sách.",
        "btn_android": "Tải trên Google Play",
        "btn_web": "Mở Web App",
        "btn_learn_more": "Tìm hiểu thêm"
    },
    "en": {
        "hero_title": "Sustainable progress always starts with the right approach.",
        "hero_subtitle": "The right tools and effective methods help you learn, work, and grow more effectively with less effort.",
        "section_title": "Products",
        "gino_desc": "Capture ideas. Review smarter. Remember longer. Your notes, synced and accessible anywhere across Android and the Web.",
        "rusa_desc": "Read in your own way. RusaReader brings together ebook reading and text-to-speech, then turns your reading journey into a knowledge forest where you can save reflections, experiences, and key takeaways from every book.",
        "btn_android": "Get on Google Play",
        "btn_web": "Open Web App",
        "btn_learn_more": "Learn more"
    }
};

let currentLang = "vi";

function toggleLanguage() {
    currentLang = currentLang === "vi" ? "en" : "vi";

    // Cập nhật text
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });

    // Đổi nhãn nút bấm
    document.getElementById("langToggle").innerText = currentLang === "vi" ? "VI / EN" : "EN / VI";

    // Cập nhật title trình duyệt
    document.title = currentLang === "vi"
        ? "Lathedo - Tiến bộ bền vững luôn bắt đầu từ những phương pháp đúng đắn."
        : "Lathedo - Sustainable progress always starts with the right approach.";
}

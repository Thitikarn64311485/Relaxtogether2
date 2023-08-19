const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('searchbutton');

const targetHeading = document.getElementById('targetHeading');

searchButton.addEventListener('click', () => {
    const query = searchInput.value;

    // ค้นหาข้อความและเลื่อนไปยังข้อความที่ค้นหา
    searchAndScrollToTarget(query);
});

function searchAndScrollToTarget(query) {
    // ในตัวอย่างนี้ เราจะสมมติว่าคำที่ค้นหาตรงกับข้อความในเนื้อหา
    // คุณสามารถเปลี่ยนโค้ดนี้ให้ตรงกับการค้นหาและพื้นที่เนื้อหาของคุณ
    if (query === 'การออกกำลังกาย') {
        targetHeading.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log('ไม่พบคำค้นหา');
    }
}









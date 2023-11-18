const s=document.querySelectorAll('#head-menu a');
s.forEach(item => {
    item.addEventListener('click', function() {
        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        if(section)
        {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
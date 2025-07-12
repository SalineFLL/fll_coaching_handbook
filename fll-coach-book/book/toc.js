// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">Introduction</a></li><li class="chapter-item expanded affix "><a href="starting_team.html">Starting your team</a></li><li class="chapter-item expanded affix "><li class="part-title">Competition</li><li class="chapter-item expanded "><a href="competition/competition.html"><strong aria-hidden="true">1.</strong> Anatomy of a Competition</a></li><li class="chapter-item expanded "><a href="competition/rubrics.html"><strong aria-hidden="true">2.</strong> Judging session scoring rubrics</a></li><li class="chapter-item expanded affix "><li class="part-title">Season Syllabus</li><li class="chapter-item expanded "><a href="syllabus/syllabus.html"><strong aria-hidden="true">3.</strong> Syllabus</a></li><li class="chapter-item expanded affix "><li class="part-title">Expectations of Coaches</li><li class="chapter-item expanded "><a href="coaches/intro.html"><strong aria-hidden="true">4.</strong> Intro</a></li><li class="chapter-item expanded "><a href="coaches/space.html"><strong aria-hidden="true">5.</strong> Maintaining shared space</a></li><li class="chapter-item expanded "><a href="coaches/resources.html"><strong aria-hidden="true">6.</strong> Managing resources</a></li><li class="chapter-item expanded "><a href="coaches/reimbursement.html"><strong aria-hidden="true">7.</strong> Reimbursement of expenses</a></li><li class="chapter-item expanded "><a href="coaches/reservations.html"><strong aria-hidden="true">8.</strong> Reserving the media center</a></li><li class="chapter-item expanded affix "><li class="part-title">Expectations of Teammates</li><li class="chapter-item expanded "><a href="teammates/intro.html"><strong aria-hidden="true">9.</strong> Intro</a></li><li class="chapter-item expanded "><a href="teammates/code_of_conduct.html"><strong aria-hidden="true">10.</strong> Code of conduct</a></li><li class="chapter-item expanded affix "><li class="part-title">Coaching Resources</li><li class="chapter-item expanded "><a href="resources/intro.html"><strong aria-hidden="true">11.</strong> Intro</a></li><li class="chapter-item expanded "><a href="resources/contacts.html"><strong aria-hidden="true">12.</strong> Who do I contact for...</a></li><li class="chapter-item expanded "><a href="resources/first.html"><strong aria-hidden="true">13.</strong> Links to FIRST resources</a></li><li class="chapter-item expanded "><a href="resources/youtube_links.html"><strong aria-hidden="true">14.</strong> YouTube videos and channels</a></li><li class="chapter-item expanded "><a href="resources/interview_questions.html"><strong aria-hidden="true">15.</strong> Expert interview questions</a></li><li class="chapter-item expanded "><a href="resources/robot_data_sheet.html"><strong aria-hidden="true">16.</strong> Robot data sheet</a></li><li class="chapter-item expanded "><a href="resources/mission_data_sheet.html"><strong aria-hidden="true">17.</strong> Mission model data sheet</a></li><li class="chapter-item expanded "><a href="resources/core_values.html"><strong aria-hidden="true">18.</strong> Core values specialist sheet</a></li><li class="chapter-item expanded "><a href="resources/skills.html"><strong aria-hidden="true">19.</strong> Skills specialist sheet</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);

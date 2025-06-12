// Quill Editor
const addProjectDescriptionTextArea = document.getElementById('add-project-description')
const addProjectDescriptionWithQuill = new Quill('#add-project-editor', {
    modules: {
        syntax: true,
        toolbar: '#add-project-toolbar'
    },
    theme: 'snow',
    placeholder: 'Type something...'
});

addProjectDescriptionWithQuill.on('text-change', function () {
    addProjectDescriptionTextArea.value = addProjectDescriptionWithQuill.root.innerHTML
})

const editDescriptionTextArea = document.getElementById('edit-project-description');
const editQuill = new Quill('#edit-project-editor', {
    modules: { syntax: true, toolbar: '#edit-project-toolbar' },
    theme: 'snow',
    placeholder: 'Type something…'
});
editQuill.on('text-change', () => {
    editDescriptionTextArea.value = editQuill.root.innerHTML;
});

const modals = document.querySelectorAll('[data-type="modal"]')
modals.forEach(modal => {
    modal.addEventListener('click', function () {
        const targetId = modal.getAttribute('data-target')
        const targetElement = document.querySelector(targetId)

        targetElement.classList.toggle('show-modal')
    })
})

// Close button

const closeButtons = document.querySelectorAll('[data-type="close"]')
closeButtons.forEach(button => {
    button.addEventListener('click', function () {
        const targetId = button.getAttribute('data-target')
        const targetElement = document.querySelector(targetId)

        targetElement.classList.remove('show-modal')
    })
})

// Form Select

document.querySelectorAll('.form-select').forEach(select => {
    const trigger = select.querySelector('.form-select-trigger')
    const triggerText = trigger.querySelector('.form-select-text')
    const options = select.querySelectorAll('.form-select-option')
    const hiddenInput = select.querySelector('input[type="hidden"]')
    const placeholder = select.dataset.placeholder || "Choose"

    const setValue = (value = "", text = placeholder) => {
        triggerText.textContent = text
        hiddenInput.value = value
        select.classList.toggle('has-placeholder', !value)
    }

    setValue()

    trigger.addEventListener('click', (e) => {
        e.stopPropagation()
        document.querySelectorAll('.form-select.open')
            .forEach(el => el !== select && el.classList.remove('open'))
        select.classList.toggle('open')
    })

    options.forEach(option =>
        option.addEventListener('click', () => {
            setValue(option.dataset.value, option.textContent)
            select.classList.remove('open')
        })
    )

    document.addEventListener('click', e => {
        if (!select.contains(e.target))
            select.classList.remove('open')
    })
})


// Dropdown Hantering - Fixed with the help of ChatGPT

// grab every button that should toggle a dropdown
const dropdownButtons = document.querySelectorAll('[data-type="dropdown"]');

// for each button: wire up toggle
dropdownButtons.forEach(button => {
    // find the dropdown by its id (from data-target="#…")
    const dropdown = document.querySelector(button.getAttribute('data-target'));

    button.addEventListener('click', e => {
        e.stopPropagation();
        dropdown.classList.toggle('show-dropdown');
    });
});

document.addEventListener('click', e => {
    dropdownButtons.forEach(button => {
        const dropdown = document.querySelector(button.getAttribute('data-target'));
        if (
            !button.contains(e.target) &&  // click was not on this button
            !dropdown.contains(e.target)   // and not inside this dropdown
        ) {
            dropdown.classList.remove('show-dropdown');
        }
    });
});

// Project Tabs Handling - Fixed with the help of ChatGPT

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".project-tabs .tab");
    const projectGrid = document.querySelectorAll(".projects-grid");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            projectGrid.forEach(p => p.classList.add("hidden"));

            tab.classList.add("active");

            let target = tab.getAttribute("data-target");
            if (!target.startsWith("#")) target = "#" + target;

            const panel = document.querySelector(target);
            if (panel) panel.classList.remove("hidden");
        });
    });
});
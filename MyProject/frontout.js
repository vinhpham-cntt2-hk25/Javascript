let contacts = [
  {
    name: 'Nguyễn Văn An',
    phone: '0901234567',
    email: 'nguyenvanan@email.com',
    address: '123 Đường ABC, Quận 1, TP.HCM'
  },
  {
    name: 'Trần Thị Bình',
    phone: '0912345678',
    email: 'tranthibinh@email.com',
    address: '456 Đường XYZ, Quận 2, TP.HCM'
  },
  
];
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Ngăn form submit mặc định

  const name = document.getElementById('contact-name').value.trim();
  const phone = document.getElementById('contact-phone').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const address = document.getElementById('contact-address').value.trim();
  
  if (!validateContact(name, phone, email, address)) {
    return;
  }
  addContact(name, phone, email, address);
});
function validateContact(name, phone, email, address) {
  if (!name || !phone || !email || !address) {
    alert('All fields are required');
    return false;
  }
  if (!email.includes('@')) {
    alert('Invalid email');
    return false;
  }
  return true;
}

function addContact(name, phone, email, address) {
  contacts.push({name, phone, email, address});
  renderList();
}

function renderList() {
  const list = document.getElementById('contact-list');
  list.innerHTML = '';
  contacts.forEach(contact => {
    const li = document.createElement('li');
    li.textContent = `${contact.name} - ${contact.phone} - ${contact.email} - ${contact.address}`;
    list.appendChild(li);
  });
}

renderList(); 
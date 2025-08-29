const books = [
      { title: "Mathematics", author: "R.D. Sharma", subject: "Math", class: "10" },
        { title: "Science", author: "NCERT", subject: "Science", class: "10" },
          { title: "English Literature", author: "NCERT", subject: "English", class: "10" },
            { title: "History", author: "NCERT", subject: "Social Science", class: "10" },
              { title: "Geography", author: "NCERT", subject: "Social Science", class: "10" },
                { title: "Hindi", author: "Sparsh", subject: "Hindi", class: "10" },
                ];

                const ADMIN_PASS = "teacher123"; // Change this password
                let isAdmin = false;

                function displayBooks(bookArray = books) {
                  const list = document.getElementById("bookList");
                    list.innerHTML = "";
                      bookArray.forEach(book => {
                          const card = `
                                <div class="bg-white p-4 shadow rounded">
                                        <h3 class="font-bold text-xl">${book.title}</h3>
                                                <p><strong>Author:</strong> ${book.author}</p>
                                                        <p><strong>Subject:</strong> ${book.subject}</p>
                                                                <p><strong>Class:</strong> ${book.class}</p>
                                                                      </div>`;
                                                                          list.innerHTML += card;
                                                                            });
                                                                            }

                                                                            function filterBooks() {
                                                                              const query = document.getElementById("searchInput").value.toLowerCase();
                                                                                const filtered = books.filter(b => b.title.toLowerCase().includes(query));
                                                                                  displayBooks(filtered);
                                                                                  }

                                                                                  function authenticateAdmin() {
                                                                                    const input = document.getElementById("adminPassword").value;
                                                                                      if (input === ADMIN_PASS) {
                                                                                          isAdmin = true;
                                                                                              document.getElementById("adminControls").classList.remove("hidden");
                                                                                                  displayAdminSelector();
                                                                                                      alert("Login successful");
                                                                                                        } else {
                                                                                                            alert("Incorrect password");
                                                                                                              }
                                                                                                              }

                                                                                                              function displayAdminSelector() {
                                                                                                                const selector = document.getElementById("bookSelector");
                                                                                                                  selector.innerHTML = "";
                                                                                                                    books.forEach(book => {
                                                                                                                        selector.innerHTML += `
                                                                                                                              <div>
                                                                                                                                      <label>
                                                                                                                                                <input type="checkbox" value="${book.title}" class="book-checkbox"> ${book.title}
                                                                                                                                                        </label>
                                                                                                                                                              </div>`;
                                                                                                                                                                });
                                                                                                                                                                }

                                                                                                                                                                function saveTomorrowBooks() {
                                                                                                                                                                  const selected = Array.from(document.querySelectorAll(".book-checkbox:checked")).map(cb => cb.value);
                                                                                                                                                                    localStorage.setItem("tomorrowBooks", JSON.stringify(selected));
                                                                                                                                                                      loadTomorrowBooks();
                                                                                                                                                                        alert("Tomorrow's book list updated!");
                                                                                                                                                                        }

                                                                                                                                                                        function loadTomorrowBooks() {
                                                                                                                                                                          const list = document.getElementById("tomorrowList");
                                                                                                                                                                            const saved = JSON.parse(localStorage.getItem("tomorrowBooks")) || [];
                                                                                                                                                                              list.innerHTML = saved.map(title => `<li>${title}</li>`).join("");
                                                                                                                                                                              }

                                                                                                                                                                              // Initial load
                                                                                                                                                                              displayBooks();
                                                                                                                                                                              loadTomorrowBooks();
import React, { useEffect, useRef } from "react";

function Bootstrap() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div id="list-example" className="list-group sticky-top">
              <a
                href="#list-item-1"
                className="list-group-item list-group-item-action"
              >
                Item 1
              </a>
              <a
                href="#list-item-2"
                className="list-group-item list-group-item-action"
              >
                Item 2
              </a>
              <a
                href="#list-item-3"
                className="list-group-item list-group-item-action"
              >
                Item 3
              </a>
              <a
                href="#list-item-4"
                className="list-group-item list-group-item-action"
              >
                Item 4
              </a>
            </div>
          </div>

          <div className="col-md-8">
            <div
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-offset="20"
              id="test"
              style={{ overflow: "auto" }}
            >
              <h4 id="list-item-1">Item 1</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                distinctio nihil nesciunt reprehenderit eaque, nam suscipit at
                rerum, quidem harum voluptate, cum nobis aspernatur! Ipsam
                sapiente laboriosam ut saepe a vero illo eligendi provident
                ipsa! Ipsam quidem voluptate, id porro incidunt similique quam
                magnam esse molestias ipsum minus veniam consectetur culpa iure
                minima beatae commodi? Consectetur, eaque exercitationem?
                Recusandae earum eius distinctio vel corrupti impedit nemo.
                Libero ut doloremque a molestias eaque obcaecati cupiditate
                commodi architecto quisquam fugiat, autem sapiente omnis
                repellendus ratione ex perferendis? Modi ipsa natus beatae rem
                id quia eligendi culpa quod adipisci reiciendis neque, sint
                nostrum animi quas harum possimus rerum sequi corporis? Iure sed
                rem itaque inventore numquam atque iste fuga esse ab. Corrupti
                repellendus expedita, sapiente fuga ullam aliquid neque animi
                quaerat natus praesentium eaque ut officia fugit hic sint atque
                similique tenetur. Reprehenderit, perspiciatis! Commodi
                necessitatibus vero nobis mollitia unde modi qui nemo eum!
                Accusamus, eveniet? Amet vel veritatis laudantium quae sed
                architecto, voluptatum optio temporibus, libero maxime nam
                impedit beatae aliquam nulla obcaecati. Quasi necessitatibus
                facere sed? Voluptatem totam necessitatibus repellendus iusto
                non sit deleniti sint cupiditate praesentium, facere tempore
                nostrum maiores molestiae ullam doloremque provident officia
                error dolorem ducimus sapiente id unde tempora reprehenderit
                aspernatur. Distinctio, fugiat excepturi. Doloremque sed
                provident accusantium a iusto aut placeat, molestias, similique
                enim ducimus suscipit laudantium aperiam animi nisi? Aliquam
                inventore eos molestiae molestias at quidem consequatur sapiente
                vel quod facilis pariatur modi facere alias blanditiis, maxime
                sint saepe veniam culpa, praesentium nisi, totam ratione et?
                Molestias autem voluptate quibusdam accusamus aut ratione? Quos
                voluptas velit animi inventore, quaerat et ab in atque alias
                voluptate reprehenderit, voluptatem deleniti dolorum ducimus
                consectetur soluta beatae quas ex nisi laboriosam! Atque
                voluptatibus quibusdam ab dolorum similique modi laborum ad
                architecto provident, ipsum odio quaerat perferendis, debitis
                laboriosam deserunt.
              </p>
              <h4 id="list-item-2">Item 1</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                distinctio nihil nesciunt reprehenderit eaque, nam suscipit at
                rerum, quidem harum voluptate, cum nobis aspernatur! Ipsam
                sapiente laboriosam ut saepe a vero illo eligendi provident
                ipsa! Ipsam quidem voluptate, id porro incidunt similique quam
                magnam esse molestias ipsum minus veniam consectetur culpa iure
                minima beatae commodi? Consectetur, eaque exercitationem?
                Recusandae earum eius distinctio vel corrupti impedit nemo.
                Libero ut doloremque a molestias eaque obcaecati cupiditate
                commodi architecto quisquam fugiat, autem sapiente omnis
                repellendus ratione ex perferendis? Modi ipsa natus beatae rem
                id quia eligendi culpa quod adipisci reiciendis neque, sint
                nostrum animi quas harum possimus rerum sequi corporis? Iure sed
                rem itaque inventore numquam atque iste fuga esse ab. Corrupti
                repellendus expedita, sapiente fuga ullam aliquid neque animi
                quaerat natus praesentium eaque ut officia fugit hic sint atque
                similique tenetur. Reprehenderit, perspiciatis! Commodi
                necessitatibus vero nobis mollitia unde modi qui nemo eum!
                Accusamus, eveniet? Amet vel veritatis laudantium quae sed
                architecto, voluptatum optio temporibus, libero maxime nam
                impedit beatae aliquam nulla obcaecati. Quasi necessitatibus
                facere sed? Voluptatem totam necessitatibus repellendus iusto
                non sit deleniti sint cupiditate praesentium, facere tempore
                nostrum maiores molestiae ullam doloremque provident officia
                error dolorem ducimus sapiente id unde tempora reprehenderit
                aspernatur. Distinctio, fugiat excepturi. Doloremque sed
                provident accusantium a iusto aut placeat, molestias, similique
                enim ducimus suscipit laudantium aperiam animi nisi? Aliquam
                inventore eos molestiae molestias at quidem consequatur sapiente
                vel quod facilis pariatur modi facere alias blanditiis, maxime
                sint saepe veniam culpa, praesentium nisi, totam ratione et?
                Molestias autem voluptate quibusdam accusamus aut ratione? Quos
                voluptas velit animi inventore, quaerat et ab in atque alias
                voluptate reprehenderit, voluptatem deleniti dolorum ducimus
                consectetur soluta beatae quas ex nisi laboriosam! Atque
                voluptatibus quibusdam ab dolorum similique modi laborum ad
                architecto provident, ipsum odio quaerat perferendis, debitis
                laboriosam deserunt.
              </p>
              <h4 id="list-item-3">Item 1</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                distinctio nihil nesciunt reprehenderit eaque, nam suscipit at
                rerum, quidem harum voluptate, cum nobis aspernatur! Ipsam
                sapiente laboriosam ut saepe a vero illo eligendi provident
                ipsa! Ipsam quidem voluptate, id porro incidunt similique quam
                magnam esse molestias ipsum minus veniam consectetur culpa iure
                minima beatae commodi? Consectetur, eaque exercitationem?
                Recusandae earum eius distinctio vel corrupti impedit nemo.
                Libero ut doloremque a molestias eaque obcaecati cupiditate
                commodi architecto quisquam fugiat, autem sapiente omnis
                repellendus ratione ex perferendis? Modi ipsa natus beatae rem
                id quia eligendi culpa quod adipisci reiciendis neque, sint
                nostrum animi quas harum possimus rerum sequi corporis? Iure sed
                rem itaque inventore numquam atque iste fuga esse ab. Corrupti
                repellendus expedita, sapiente fuga ullam aliquid neque animi
                quaerat natus praesentium eaque ut officia fugit hic sint atque
                similique tenetur. Reprehenderit, perspiciatis! Commodi
                necessitatibus vero nobis mollitia unde modi qui nemo eum!
                Accusamus, eveniet? Amet vel veritatis laudantium quae sed
                architecto, voluptatum optio temporibus, libero maxime nam
                impedit beatae aliquam nulla obcaecati. Quasi necessitatibus
                facere sed? Voluptatem totam necessitatibus repellendus iusto
                non sit deleniti sint cupiditate praesentium, facere tempore
                nostrum maiores molestiae ullam doloremque provident officia
                error dolorem ducimus sapiente id unde tempora reprehenderit
                aspernatur. Distinctio, fugiat excepturi. Doloremque sed
                provident accusantium a iusto aut placeat, molestias, similique
                enim ducimus suscipit laudantium aperiam animi nisi? Aliquam
                inventore eos molestiae molestias at quidem consequatur sapiente
                vel quod facilis pariatur modi facere alias blanditiis, maxime
                sint saepe veniam culpa, praesentium nisi, totam ratione et?
                Molestias autem voluptate quibusdam accusamus aut ratione? Quos
                voluptas velit animi inventore, quaerat et ab in atque alias
                voluptate reprehenderit, voluptatem deleniti dolorum ducimus
                consectetur soluta beatae quas ex nisi laboriosam! Atque
                voluptatibus quibusdam ab dolorum similique modi laborum ad
                architecto provident, ipsum odio quaerat perferendis, debitis
                laboriosam deserunt.
              </p>
              <h4 id="list-item-4">Item 1</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                distinctio nihil nesciunt reprehenderit eaque, nam suscipit at
                rerum, quidem harum voluptate, cum nobis aspernatur! Ipsam
                sapiente laboriosam ut saepe a vero illo eligendi provident
                ipsa! Ipsam quidem voluptate, id porro incidunt similique quam
                magnam esse molestias ipsum minus veniam consectetur culpa iure
                minima beatae commodi? Consectetur, eaque exercitationem?
                Recusandae earum eius distinctio vel corrupti impedit nemo.
                Libero ut doloremque a molestias eaque obcaecati cupiditate
                commodi architecto quisquam fugiat, autem sapiente omnis
                repellendus ratione ex perferendis? Modi ipsa natus beatae rem
                id quia eligendi culpa quod adipisci reiciendis neque, sint
                nostrum animi quas harum possimus rerum sequi corporis? Iure sed
                rem itaque inventore numquam atque iste fuga esse ab. Corrupti
                repellendus expedita, sapiente fuga ullam aliquid neque animi
                quaerat natus praesentium eaque ut officia fugit hic sint atque
                similique tenetur. Reprehenderit, perspiciatis! Commodi
                necessitatibus vero nobis mollitia unde modi qui nemo eum!
                Accusamus, eveniet? Amet vel veritatis laudantium quae sed
                architecto, voluptatum optio temporibus, libero maxime nam
                impedit beatae aliquam nulla obcaecati. Quasi necessitatibus
                facere sed? Voluptatem totam necessitatibus repellendus iusto
                non sit deleniti sint cupiditate praesentium, facere tempore
                nostrum maiores molestiae ullam doloremque provident officia
                error dolorem ducimus sapiente id unde tempora reprehenderit
                aspernatur. Distinctio, fugiat excepturi. Doloremque sed
                provident accusantium a iusto aut placeat, molestias, similique
                enim ducimus suscipit laudantium aperiam animi nisi? Aliquam
                inventore eos molestiae molestias at quidem consequatur sapiente
                vel quod facilis pariatur modi facere alias blanditiis, maxime
                sint saepe veniam culpa, praesentium nisi, totam ratione et?
                Molestias autem voluptate quibusdam accusamus aut ratione? Quos
                voluptas velit animi inventore, quaerat et ab in atque alias
                voluptate reprehenderit, voluptatem deleniti dolorum ducimus
                consectetur soluta beatae quas ex nisi laboriosam! Atque
                voluptatibus quibusdam ab dolorum similique modi laborum ad
                architecto provident, ipsum odio quaerat perferendis, debitis
                laboriosam deserunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bootstrap;

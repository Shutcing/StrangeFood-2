const menu_wrapper = document.querySelector(".menu__wrapper");
const sample = (r1, r2, r3, img) => `
<section class='menu__point'>
	<div class='menu__point__item'>
		<div class='point__img-place __pizza-place'>
			<img src='${img}'>
		</div>
		<div class='point__title'>
			${r1}
		</div>
	</div>

	<div class='menu__zoom __zoom1' id='__zom'>
		<div class='zoom__img'>
			<img src='${img}'>
		</div>
		<div class='zoom__text'>
			<div class='zoom__title'>${r1}</div>
			<div class='zoom__content'>
				${r2}
			</div>
			<a class='zoom__link' href='${r3}' target='_blank'>
				<div class='zoom__button'>В ресторан!</div>
			</a>
		</div>
		<div class="zoom__close">
			<div class='close1'></div>
			<div class='close2'></div>
		</div>
	</div>
</section>
`;

const infArray = [
  {
    title: "Пицца с картофелем фри",
    content: `&#9749; ItalianPizza<br>
        &#127850; 30 см<br>
        &#x1f4b8; 555 &#8381;<br>`,
    href: "https://italianpizza.ru/category/picca/product/99658218-picca-chiziki-30sm",
    src: "Menu_img/Menu_puncts/pizza.png",
  },
  {
    title: "Ролл-дог",
    content: `&#9749; ItalianPizza<br>
    &#127850; 175 г<br>
    &#x1f4b8; 205 &#8381;<br>`,
    href: "https://italianpizza.ru/category/rolly/product/99657922-roll-dog-s-zharennym-lososem",
    src: "Menu_img/Menu_puncts/roll-dog.png",
  },
  {
    title: "Nordic tea",
    content: `&#9749; Nordic tea<br>
    &#127850; чай в виде мороженного!<br>
    &#x1f4b8; 185 &#8381;<br>`,
    href: "https://ppr-ek.ru/menu/napitki/chay-klyukva-i-badyan/",
    src: "Menu_img/Menu_puncts/tea.png",
  },
  {
    title: "Чебурек с клубникой и бананом",
    content: `&#9749; ЧебурекМи<br>
    &#127850; 215 г<br>
    &#x1f4b8; 129 &#8381;<br>`,
    href: "https://cheburek.me/#foodmenu",
    src: "Menu_img/Menu_puncts/cheburek.png",
  },
  {
    title: "Четырёхэтажная пицца",
    content: `&#9749; Crazy Brothers<br>
    &#127850; более 10 видов<br>
    &#x1f4b8; от 890 &#8381;<br>`,
    href: "https://ekb.crazybrothers.ru/menu/pizza-all/pizza/",
    src: "Menu_img/Menu_puncts/4pizza.png",
  },
];

for (var item of infArray) {
  $(menu_wrapper).prepend(
    sample(item.title, item.content, item.href, item.src)
  );
}

$(".menu__zoom").toggle(0);
$(".menu__zoom").css("opacity", "1");

$(".menu__point__item").click((e) => {
  let item = $(e.currentTarget).next()[0];
  $(item).toggle(1000);
});

$(".zoom__close").click((e) => {
  let wrap = $(e.currentTarget).parent()[0];
  $(wrap).hide(1000);
});

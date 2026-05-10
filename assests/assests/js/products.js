// Products Data
const products = {
    apparelAccessories: [
        {
            name: "Paper Label",
            image: "./assests/image/products/adhuna-accessories-paper-label-sample.png"
        },
        {
            name: "Care Label",
            image: "./assests/image/products/adhuna-accessories-care-lable-sample.png"
        },
        {
            name: "Size Label",
            image: "./assests/image/products/adhuna-accessories-size-label-sample.png"
        },
        {
            name: "Brand Label",
            image: "./assests/image/products/adhuna-accessories-brand-label-sample.png"
        },
        {
            name: "Barcode Label",
            image: "./assests/image/products/adhuna-accessories-barcode-label-sample.png"
        },
        {
            name: "Tracking PO Label",
            image: "./assests/image/products/adhuna-accessories-tracking-po-label-sample.png"
        },
        {
            name: "Hand Tag",
            image: "./assests/image/products/adhuna-accessories-hand-tag-sample.png"
        },
        {
            name: "Back Board",
            image: "./assests/image/products/adhuna-accessories-back-board-sample.png"
        },
        {
            name: "Box",
            image: "./assests/image/products/adhuna-accessories-box-sample.png"
        },
        {
            name: "Barcode Ribbon",
            image: "./assests/image/products/adhuna-accessories-barcode-ribbon-sample.png"
        },
        {
            name: "Barcode Sticker",
            image: "./assests/image/products/adhuna-accessories-barcode-sticker-sample.png"
        },
        {
            name: "Gum Tape",
            image: "./assests/image/products/adhuna-accessories-gum-tape-sample.png"
        }
    ],
    silicaGel: [
        {
            name: "White Silica Gel",
            image: "./assests/image/products/S1-min.jpg"
        },
        {
            name: "Natural Clay",
            image: "./assests/image/products/S2-min.jpg"
        },
        {
            name: "Dri Clay",
            image: "./assests/image/products/S3-min.jpg"
        }
    ]
};

// Function to render product cards
function renderProducts(containerId, productArray, categoryName) {
    const container = document.getElementById(containerId);
    
    if (!container) return;

    // Create heading
    const heading = document.createElement('h3');
    heading.textContent = categoryName;
    container.appendChild(heading);

    // Create row container
    const row = document.createElement('div');
    row.className = 'row justify-content-center align-items-center';

    // Loop through products and create cards
    productArray.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 col-sm-12 mb-4';
        
        col.innerHTML = `
            <div class="product-wraper">
                <div class="img-wraper">
                    <img class="img-fluid" src="${product.image}" alt="${product.name}">
                    <div class="overlay"></div>
                </div>
                <div class="product-name">
                    <h6>${product.name}</h6>
                </div>
            </div>
        `;

        row.appendChild(col);
    });

    container.appendChild(row);
}

// Initialize products when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Render Apparel Accessories
    const apparelContainer = document.getElementById('accessories-container');
    if (apparelContainer) {
        renderProducts('accessories-container', products.apparelAccessories, 'Apparel Accessories');
    }

    // Render Silica Gel
    const silicaContainer = document.getElementById('silica-container');
    if (silicaContainer) {
        renderProducts('silica-container', products.silicaGel, 'Silica Gel');
    }
});

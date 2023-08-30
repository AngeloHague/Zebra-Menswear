# Theme Setup
**Step 1.** Go to your Shopify Store Admin Settings (https://your-shopify-store.myshopify.com/admin)

**Step 2.** Go to Settings in the bottom left

**Step 3.** Go to Metafields > Collections, and add definition.

**Step 4.1.** Add the following definition:
```
Name:
Brand Promotional Image

Namespace and key:
brand.image

Description:
Promotion Imagery for brands
```

**Step 4.2.** Click *"Select Content Type"* and select *File* and the following Validation Settings:

```
RULES
[+] Accept Specific file types
    [+] Images
    [-] Videos
```

**Step 4.3.** Press Save.

**Step 5.** Repeat Step 4 with the following definitions:
**Step 5.1** Parent Categories
```
Name:
Parent Category

Namespace and key:
category.parent

Description:
A category's hierarchical parent (e.g. Clothing is Jeans' parent)
```
**Step 5.2** Child Categories
```
Name:
Child Categories

Namespace and key:
category.children

Description:
A category's hierarchical children (e.g. Clothing's children are Blazers, Casual Shirts, Coats, etc)
```

# Adding Collection Banners
**Step 1.** Go to your Shopify Store Admin Settings (https://YOUR_SHOPIFY_STORE.myshopify.com/admin)

**Step 2.** Go to Products on the left, then Collections.

**Step 3.** Open the collection you wish to change and scroll down to metafields.

**Step 4.** Click in the empty field next to Brand Imagery, and click Select image.

**Step 5.** Upload (if you haven't already), select the appropiate image and save.

# Setting Parent and Child Categories
**Step 1.** Go to your Shopify Store Admin Settings (https://YOUR_SHOPIFY_STORE.myshopify.com/admin)

**Step 2.** Go to Products on the left, then Collections.

**Step 3.** Open the collection you wish to change and scroll down to metafields.

**Step 4.** If the collection is above other categories in a menu, select the Child Categories field and select any hierarchal child categories.

**Step 5.** If the collection is below another category in a menu, select the Parent Category field and select it's hierarchal parent.
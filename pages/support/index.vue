<template>
  <div class="container my-4">
    <div class="col">
      <div class="ah-breadcrumb-container">
        <NuxtLink to="/">Home</NuxtLink> > Support
      </div>
      <h1 class="mt-5">FAQs</h1>
      <BaseAccordion class="mt-4">
        <BaseAccordionItem aid="0">
          <BaseAccordionHeader>
            <template #header><span>Free Shipping and Returns</span></template>
            <template #icon><BaseIcon :icon-data="plusIcon" custom-class="icon-rotate45" /></template>
          </BaseAccordionHeader>
          <BaseAccordionContent>
            <p>We offer free standard shipping on all orders over $59, no promo code needed. Your eligible order will automatically qualify for free shipping at checkout. Not satisfied with your purchase? No problem—we also offer free returns within 30 days of delivery. Shop with confidence knowing we've got you covered on both shipping and returns.</p>
          </BaseAccordionContent>
        </BaseAccordionItem>
        <BaseAccordionItem aid="1">
          <BaseAccordionHeader>
            <template #header><span>Online Support</span></template>
            <template #icon><BaseIcon :icon-data="plusIcon" custom-class="icon-rotate45" /></template>
          </BaseAccordionHeader>
          <BaseAccordionContent>
            <p>Need help? Our support team is available 24/7 to assist you. Whether you prefer live chat or speaking with someone via our call center, we're here to help-anytime, anywhere. Get quick answers, product guidance, or order support whenever you need it.</p>
          </BaseAccordionContent>
        </BaseAccordionItem>
        <BaseAccordionItem aid="2">
          <BaseAccordionHeader>
            <template #header><span>Money Back Guarantee</span></template>
            <template #icon><BaseIcon :icon-data="plusIcon" custom-class="icon-rotate45" /></template>
          </BaseAccordionHeader>
          <BaseAccordionContent>
            <p>Your satisfaction is our priority. That’s why we offer a 100% Money Back Guarantee. If you're not completely happy with your purchase, simply return it within 30 days for a full refund—no questions asked. Shop risk-free and with total confidence.</p>
          </BaseAccordionContent>
        </BaseAccordionItem>
        <BaseAccordionItem aid="3">
          <BaseAccordionHeader>
            <template #header><span>Secure Payment</span></template>
            <template #icon><BaseIcon :icon-data="plusIcon" custom-class="icon-rotate45" /></template>
          </BaseAccordionHeader>
          <BaseAccordionContent>
            <p>We take your security seriously. All transactions are encrypted and processed through trusted, PCI-compliant payment gateways. Shop confidently knowing your personal and payment information is fully protected.</p>
          </BaseAccordionContent>
        </BaseAccordionItem>
        <BaseAccordionItem aid="4">
          <BaseAccordionHeader>
            <template #header><span>Order Tracking</span></template>
            <template #icon><BaseIcon :icon-data="plusIcon" custom-class="icon-rotate45" /></template>
          </BaseAccordionHeader>
          <BaseAccordionContent>
            <p>Once your order is placed, you’ll receive a confirmation email with a tracking number. Use it to monitor your shipment in real-time and stay updated on delivery progress right to your door.</p>
          </BaseAccordionContent>
        </BaseAccordionItem>
      </BaseAccordion>
    </div>
  </div>
</template>
<script setup>
  import plusIcon from '~/assets/svg/plus.svg';
  useHead({
    title: `${useRuntimeConfig().public.titleBaseText}Support`,
  });
</script>
<style>
.accordion-item .icon-rotate45 {
  transition: transform var(--transition-duration-slow) ease-in-out;
  transform: rotate(0deg);
}
.accordion-item.active .icon-rotate45 {
  transform: rotate(45deg);
}

.accordion-item .icon-rotate180 {
  transition: transform var(--transition-duration-slow) ease-in-out;
  transform: rotate(0deg);
}
.accordion-item.active .icon-rotate180 {
  transform: rotate(180deg);
}
</style>

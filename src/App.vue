<script setup lang="ts"></script>

<template>
  <AuthLayout>
    <RouterView v-slot="{ Component, route }">
      <template v-if="Component">
        <Transition mode="out-in">
          <KeepAlive>
            <Suspense :timeout="0">
              <component :is="Component" :key="route.name" />

              <template #fallback> Loading... </template>
            </Suspense>
          </KeepAlive>
        </Transition>
      </template>
    </RouterView>
  </AuthLayout>
</template>

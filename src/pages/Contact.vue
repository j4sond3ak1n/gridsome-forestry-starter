<template>
  <Layout>
    <div>
      <div>
        <h1>Say hi!</h1>
        <p>Leave me a note with any questions you might have, I'll get back to you as soon as possible.</p>
      </div>
      <form name="contact">
        <div>
          <div>
            <label for="name">Your name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label for="email">Your email</label>
            <input type="email" name="email" />
          </div>
        </div>
        <div>
          <label for="message">Message</label>
          <textarea name="message"></textarea>
        </div>
        <button >Submit form</button>
      </form>
    </div>
  </Layout>
</template>
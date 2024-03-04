<template>
    <div class="pdf-viewer">
      <canvas ref="pdfCanvas"></canvas>
    </div>
  </template>
  
  <script>
  import { getDocument } from 'pdfjs-dist/es5/build/pdf';
  
  export default {
    props: ['pdfUrl'],
    mounted() {
      this.loadPdf();
    },
    methods: {
      async loadPdf() {
        const loadingTask = getDocument(this.pdfUrl);
  
        try {
          const pdf = await loadingTask.promise;
          const pageNum = 1;
          const page = await pdf.getPage(pageNum);
  
          const scale = 1.5;
          const viewport = page.getViewport({ scale: scale });
  
          const canvas = this.$refs.pdfCanvas;
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
  
          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          await page.render(renderContext).promise;
        } catch (error) {
          console.error('Error loading PDF: ', error);
        }
      },
    },
  };
  </script>
  
  <style>
  .pdf-viewer {
    overflow-x: scroll;
  }
  </style>
  
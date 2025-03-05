FROM nginx:alpine

# Copy all HTML files to nginx serve directory
COPY *.html /usr/share/nginx/html/

# Create directories for the additional pages
RUN mkdir -p /usr/share/nginx/html/privacy-policy \
    && mkdir -p /usr/share/nginx/html/terms-and-conditions

# Move the HTML files to their respective directories
RUN mv /usr/share/nginx/html/privacy-policy.html /usr/share/nginx/html/privacy-policy/index.html \
    && mv /usr/share/nginx/html/terms-and-conditions.html /usr/share/nginx/html/terms-and-conditions/index.html

COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
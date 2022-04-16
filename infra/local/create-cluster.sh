 #!/bin/bash

echo Creating cluster...
kind create cluster --name omni-cluster --config kind-config.yaml

# From https://gist.github.com/sanketsudake/a089e691286bf2189bfedf295222bd43
echo Adding metrics service
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/download/v0.5.0/components.yaml
kubectl patch deployment metrics-server -n kube-system --patch "$(cat metrics-server-patch.yaml)"

echo Applyg NGINX ingress...
kubectl apply \
  -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml

echo Waiting for ingress to be ready...
kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=90s

echo Cluster ready